import path from "path"; //ディレクトリを取得できる
import fs from "fs";
import matter from "gray-matter";
import  remark  from "remark";
import html from "remark-html";
const postsDirectory=path.join(process.cwd(),"src/posts"); //process.cwd()は今のディレクトリを指し、"posts"で指定

//mdファイルのデータを取り出す
export function getPostsData(){
    const fileNames=fs.readdirSync(postsDirectory);
    const allPostsData=fileNames.map((fileName)=>{
        const id=fileName.replace(/\.md$/,""); //mdの拡張子取り除いたファイル名(id)

        //マークダウンファイルを文字列として読み取る
        const fullPath=path.join(postsDirectory,fileName);
        const fileContents=fs.readFileSync(fullPath,"utf8"); //指定のパスのファイルをutf8(文字列)として

        const matterResult=matter(fileContents);

        //idとデータを返す
        return {
            id,
            ...matterResult.data, //配列としてtitle,date,thumbnailを順に取り出す
        };
    });
    return allPostsData;
}

//getStaticPathsでreturnで使うpathを取得する
export function getAllPostIds(){
    const fileNames=fs.readdirSync(postsDirectory);
    return fileNames.map((fileName)=>{
        return{
            params:{
                id: fileName.replace(/\.md$/,""), //[id].jsと一致
            }
        }
    });
    /*以下のような構造で返される(オブジェクトを渡す必要がある)
     [
        {
            params:{
                id:"ssg-ssr"
            }
        }
        {
            params:{
                id:"next-react"
            }
        }
        ...
     ]
     */
}

//idに基づいてブログ投稿データを返す
export async function getPostData(id){
    const fullPath=path.join(postsDirectory,`${id}.md`);
    const fileContent=fs.readFileSync(fullPath,"utf8");

    const matterResult=matter(fileContent);

    const blogContent=await remark().use(html).process(matterResult.content);

    const blogContentHTML=blogContent.toString();

    return{
        id,
        blogContentHTML,
        ...matterResult.data,
    }
}