<template>
  <div class="blogs">
    <div class="bg-[#0B1992] text-secondary font-bold">
      <div
        class="px-4 md:px-[30px] max-w-[1062px] xl2:max-w-[1128px] lg:px-0 m-auto pt-[41px] pb-[58px] lg:pt-[70px] lg:pb-[342px] text-center lg:text-left"
      >
        <h1 class="text-[36px] leading-[120%] xl2:text-[64px] Open Sans mb-4">
          Blog
        </h1>
        <p>See what’s going on at HiGate and in the technology world.</p>
      </div>
    </div>
    <div
      class="px-4 md:px-[30px] max-w-[1062px] xl2:max-w-[1128px] lg:px-0 mx-auto lg:mt-[-260px] text-secondary"
    >
      <div class="md:relative">
        <img
          v-if="dataBlogsSticky[0]?.fields"
          :src="'https:' + dataBlogsSticky[0].fields.blogImage.fields.file.url"
          class="m-auto w-[100%] aspect-[1127/520]"
          width="1127"
          height="520"
        />
        <div
          class="md:absolute top-[50%] lg:left-[100px] translate-y-[-50%] lg:max-w-[495px]"
        >
          <h3
            class="my-0 text-[28px] leading-[120%] lg:text-[36px] font-bold Open Sans"
          >
            <a href="/blogDetail/1RrWm0W9kJcFtbB2Y2lw51">{{
              dataBlogsSticky[0]?.fields?.blogTitle
            }}</a>
          </h3>
          <p class="text-4 leading-[143%] mt-6 mb-6 lg:mt-6 lg:mb-4"></p>
          <p class="">
            {{
              moment(dataBlogsSticky[0]?.fields?.createdDate).format(
                "MMMM DD, YYYY"
              )
            }}
          </p>
          <div
            class="border border-secondary py-2 px-[22px] rounded-lg w-fit truncate mt-10"
          >
            <a href="/blogDetail/1RrWm0W9kJcFtbB2Y2lw51">See More</a>
          </div>
        </div>
      </div>
    </div>
    <div
      class="px-4 md:px-[30px] max-w-[1062px] xl2:max-w-[1128px] lg:px-0 mx-auto py-12 lg:py-[96px]"
    >
      <div v-if="dataBlogs" class="md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="item in dataBlogs" :key="item.sys.id" class="mb-6 lg:mb-0">
          <a :href="'/blogDetail/' + item.sys.id"
            ><img
              class="m-auto w-[100%]"
              :src="'https:' + item.fields.blogImage.fields.file.url"
              width="360"
              height="260"
          /></a>
          <div class="flex gap-2 items-center mt-6">
            <div
              class="py-1 text-[#23262F] uppercase px-[10px] bg-border-active"
            >
              Blog
            </div>
            <p class="text-[14px] leading-[20px] text-[#888C95]">
              <span>{{
                moment(item.fields?.createdDate).format("MMMM DD, YYYY")
              }}</span>
            </p>
          </div>
          <a :href="'/blogDetail/' + item.sys.id">
            <p
              class="text-5 leading-[120%] text-title-text hover:text-primary-1 cursor-pointer font-bold Open Sans mt-2 mb-[18px]"
            >
              {{ item.fields.blogTitle }}
            </p>
          </a>
          <div
            class="text-[14px] dark:text-primary-1 leading-[150%] font-semibold"
          >
            <a :href="'/blogDetail/' + item.sys.id" class="text-[#0F23D0]"
              >See More</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import moment from "moment";
const contentful = require("contentful");

export default {
  name: "BlogView",
  data() {
    return {
      dataBlogs: [],
      dataBlogsSticky: [],
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

      const blogs = await client.getEntries({ content_type: "blog" });
      const blogsSticky = await client.getEntries({
        content_type: "blogSticky",
      });

      this.dataBlogs = blogs.items;
      this.dataBlogsSticky = blogsSticky.items;
    },
  },
  filters: {
    moment: function (date) {
      return moment(date).format("MMMM Do YYYY, h:mm:ss a");
    },
  },
};
</script>
