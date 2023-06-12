<template>
  <div v-if="result" class="wrapper--collections">
    <div
      v-for="(post, key) in result.posts"
      :key="key"
      class="wrapper--collection"
      @click="goToMint(post.title)"
    >
      <img :src="`https://ipfs.subsocial.network/ipfs/${post.image}`" />
      <div>{{ post.title }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { useCollectionInfo } from 'src/hooks/useCollectionInfo';
import { defineComponent, watch } from 'vue';
import { useRouter } from 'vue-router';
import { networkParam, Path } from 'src/router/routes';
export default defineComponent({
  setup() {
    const { result, error } = useCollectionInfo();
    const router = useRouter();

    const goToMint = (postTitle: string) => {
      const url = `${networkParam}/${postTitle.toLowerCase()}${Path.Mint}`;
      router.push(url);
    };

    watch([result, error], () => {
      if (error.value) {
        console.log(error.value);
      }
    });

    return { result, goToMint };
  },
});
</script>
<style lang="scss" scoped>
.wrapper--collections {
  display: flex;
  flex-wrap: wrap;
  grid-template-columns: repeat(auto-fill, 400px);
  column-gap: 32px;
  row-gap: 32px;
}

.wrapper--collection {
  cursor: pointer;
  transition: transform 0.5s;
  -webkit-transition: transform 0.5s;

  img {
    border-radius: 16px;
    width: 400px;
  }

  div {
    font-weight: 600;
    font-size: 24px;
    line-height: 18px;
    padding-top: 18px;
  }

  &:hover {
    transform: scale(1.05);
    -webkit-transform: scale(1.05);
  }
}
</style>
