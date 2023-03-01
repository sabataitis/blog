import { createSignal, onMount, For } from "solid-js";
import { A } from "@solidjs/router";
import PocketBase from "pocketbase";

function resToArticles(res: any) {
  return res!.items.map((rec: any) => ({
    id: rec.id,
    title: rec.title,
    slug: rec.slug,
    content: rec.content,
    published_on: rec.published_on,
  }));
}

type Article = {
  id: string;
  title: string;
  slug: string;
  content: string;
  published_on: Date;
};

export function Blog() {
  const [articles, setArticles] = createSignal<Article[]>();

  onMount(async () => {
    const pb = new PocketBase("http://127.0.0.1:8090");
    const res = await pb.collection("articles").getList();

    if (res) {
      setArticles(resToArticles(res));
    }
  });

  return (
    <div class="content">
      <For each={articles()}>
        {(article, index) => (
          <A href={article.id} class="link">
            <span>{index}:</span> {article.title}
          </A>
        )}
      </For>
    </div>
  );
}
