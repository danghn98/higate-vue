<template>
  <div v-if="this.dataBlog" class="blog-details">
    <div class="bg-bg-blue">
      <div
        class="px-4 md:px-[30px] max-w-[1062px] xl2:max-w-[1128px] lg:px-0 m-auto pt-[41px] pb-[58px] lg:pt-[70px] lg:pb-[98px] text-center lg:text-left text-secondary"
      >
        <h1
          class="text-[36px] leading-[120%] xl2:text-[64px] font-bold Open Sans mb-4"
        >
          Blog
        </h1>
        <p>See what’s going on at HiGate and in the technology world.</p>
      </div>
    </div>
    <div
      class="px-4 md:px-[30px] max-w-[1062px] xl2:max-w-[1128px] lg:px-0 m-auto py-12 lg:py-[96px]"
    >
      <div class="lg:flex justify-between">
        <div class="w-[100%] lg:w-[17%] hidden lg:block">
          <div class="sticky top-[100px]">
            <p class="dark:text-body-text text-[14px] leading-[20px]">
              written by
              <span class="text-title-text ml-2">{{
                dataBlog?.fields?.blogAuthor
              }}</span>
            </p>
            <p class="dark:text-body-text text-[14px] leading-[20px] mt-2">
              {{
                moment(dataBlog?.fields?.createdDate).format("MMMM DD, YYYY")
              }}
            </p>
            <ul
              class="list-none flex align-center flex-wrap gap-y-2 gap-x-2 mt-[16px] lg:mt-6"
            ></ul>
          </div>
        </div>
        <div class="w-[100%] lg:w-[83%] dark:text-title-text">
          <h2
            class="text-[28px] leading-[120%] lg:text-[36px] font-bold Open Sans"
          >
            {{ dataBlog?.fields?.blogTitle }}
          </h2>
          <div class="w-[100%] lg:hidden">
            <p class="dark:text-body-text">
              written by
              <span class="dark:text-title-text">{{
                dataBlog?.fields?.blogAuthor
              }}</span>
            </p>
            <p class="dark:text-body-text">
              {{
                moment(dataBlog?.fields?.createdDate).format("MMMM DD, YYYY")
              }}
            </p>
            <ul
              class="list-none flex align-center flex-wrap gap-y-2 gap-x-2 mt-4 mb-20"
            ></ul>
          </div>
          <p class="font-bold mt-[10px] mb-[27px]"></p>
          <div
            v-if="dataBlog?.fields?.blogContent"
            v-html="convertHtml(dataBlog?.fields?.blogContent.content)"
          ></div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <h2 class="text-center py-[90px] text-[60px]">404 NOT FOUND</h2>
  </div>
</template>

<script>
// import axios from "axios";
import moment from "moment";
const contentful = require("contentful");

export default {
  name: "BlogDetails",
  props: ["id"],
  data() {
    return {
      dataBlog: [],
    };
  },
  mounted() {
    this.getDataModel();
    // this.getDes();
  },
  methods: {
    moment: function (date) {
      return moment(date);
    },
    convertHtml(value) {
      // console.log(1);
      var html = "";
      for (var i = 0; i < value.length; i++) {
        for (var j = 0; j < value[i].content.length; j++) {
          html += value[i].content[j].value;
        }
      }
      return html;
    },
    async getDataModel() {
      // const entry = "blog";

      // axios
      //   .get(
      //     `https://cdn.contentful.com/spaces/${process.env.VUE_APP_CONTENTFUL_SPACE_ID}/environments/master/entries?content_type=${entry}&access_token=${process.env.VUE_APP_CONTENTFUL_ACCESS_TOKEN}`
      //   )
      //   .then((res) => {
      //     console.log(res.data.items);
      //     this.dataModel = res.data.items;
      //   });

      const client = contentful.createClient({
        space: process.env.VUE_APP_CONTENTFUL_SPACE_ID,
        accessToken: process.env.VUE_APP_CONTENTFUL_ACCESS_TOKEN,
      });

      // await client.getEntry("123").then((entry) => {
      //   // console.log(entries.fields.blogTags);
      //   this.dataBlog = entry.items;
      // });
      try {
        await client.getEntry(this.id).then((entries) => {
          console.log(entries);
          this.dataBlog = entries;
        });
      } catch (error) {
        this.dataBlog = undefined;
        console.log(error);
      }
      // this.dataBlog = blog.items;
      // console.log(this.$route.params.id);
    },
  },
  filters: {
    moment: function (date) {
      return moment(date).format("MMMM Do YYYY, h:mm:ss a");
    },
  },
};
</script>
