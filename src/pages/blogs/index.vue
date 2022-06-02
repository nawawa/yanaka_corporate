<template>
  <div>
    <v-row>
      <v-col :cols="xs" v-for="blog in blogs" :key="blog.id">
        <NuxtLink :to="`/blogs/${blog.id}`">
          <div>
            <img :src="blog.eyecatch.url" alt="">
            <p>{{ blog.title }}</p>
          </div>
        </NuxtLink>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  async asyncData({ $microcms }) {
    const data = await $microcms.get({
      endpoint: `blogs`,
    });
    return { blogs: data.contents };
  },
  computed: {
    xs() {
      const breakpoint = this.$vuetify.breakpoint.name;
      return (breakpoint === `xs`) ? 12: 6;
    }
  }
}
</script>