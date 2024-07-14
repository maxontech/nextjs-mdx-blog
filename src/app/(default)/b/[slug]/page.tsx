import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
//import { MDXRemote } from "next-mdx-remote/rsc";
//import YouTube from "@/components/mdx/youtube";
//import Code from "@/components/mdx/code-component/code";
//import useMDXComponents from "@/mdx-components";

import type { Metadata, ResolvingMetadata } from "next";
import Example from "@/components/Example";

type Props = {
  params: { slug: string };
};

/*
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await getPost(params);
  const title = post.frontMatter.title;
  const description = post.frontMatter.description;

  return {
    title: title,
    description: description,
    // add other metadata fields as needed
  };
}*/

async function getPost({ slug }: { slug: string }) {
  try {
    const markdownFile = fs.readFileSync(
      path.join("blogs", slug + ".mdx"),
      "utf-8"
    );
    const { data: frontMatter, content } = matter(markdownFile);
    return {
      frontMatter,
      slug,
      content,
      markdownFile
    };
  } catch (error) {
    console.error("Error fetching post:", error);
    throw new Error(`Unable to fetch the post for slug: ${slug}`);
  }
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("blogs"));
  const params = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return params;
}

export default async function Page({ params }: { params: { slug: string } }) {
  

  //console.log("props", params);
  //console.log({...params});
  console.log("params1", params);
  console.log("params2", {params});
  console.log("params3", {...params});

  const props = await getPost(params);


  console.log("props", props);

  //const components = {
    //pre: Code,
    //YouTube,
  //};
  
  const components = {
    //Example
  };



  return (
    <article className="prose prose-lg md:prose-lg lg:prose-lg mx-auto">
       <h1>{props.frontMatter.title}</h1>
      {/*https://github.com/owolfdev/simple-mdx-blog/blob/main/app/blog/%5Bslug%5D/page.tsx*/}
      <MDXRemote source={props.content} components={components} />

    </article>
  );
}