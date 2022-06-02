<template>
  <div v-html='blog.content'></div>
</template>

<script>
export default {
  async asyncData({ params, $microcms }) {
    const data = await $microcms.get({
      endpoint: `blogs/${params.id}`,
    });
    return { blog: data };
  },
}
</script>