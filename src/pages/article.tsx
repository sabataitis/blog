import { createSignal, onMount } from "solid-js";
import { useParams } from "@solidjs/router";
import PocketBase from "pocketbase";

export function Article() {
  const [article, setArticle] = createSignal<any>();
  const params = useParams();

  onMount(async () => {
    const pb = new PocketBase("http://127.0.0.1:8090");
    const res = await pb.collection("articles").getOne(params.id);

    if (res) {
      setArticle(res!);
    }
  });

  return (
    <div class="content">
      <h2 class="heading">{article()?.title}</h2>
      <div class="text" innerHTML={article()?.content}></div>
    </div>
  );
}
