import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import articleContent from './article-content';

//Pages 
import NotFound from './NotFound';

//components
 import Articles from '../components/Articles';
 import CommentsList from '../components/CommentsList'; 
 import AddCommentForm from '../components/AddCommentForm';


const Article = () => {
  const {name} = useParams();
  const article = articleContent.find(article => article.name === name);
  const otherArticle  = articleContent.filter( article => article.name !== name)
  const [articleInfo, setArticleInfo] = useState({comments:[]});
  useEffect(()=>{
    // console.log("Component mounted");
    const fetchData = async () =>{
      const result = await fetch(`/api/articles/${name}`)
      const body = await result.json()
      console.log(body);  
      setArticleInfo(body)
    };
    fetchData();
  },[name])

  if(!article) return <h1>{<NotFound/>} </h1>
  return (
    <>
      <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>
      {article.title}
      </h1>
      {article.content.map(
        (paragraph,index) =>( 
        <p className='maxauto leading-relaxed mb-4 text-base' key ={index}>{paragraph}</p>
        ))
      }
      <CommentsList comments = {articleInfo.comments}/>
      <AddCommentForm articleName={name} setArticleInfo={setArticleInfo}/>
      <h1 className='sm:text-2xl text-xl font-bold my-4 text-gray-900'>
        Other Articles
        </h1>
      <div className='flex flex-wrap -m-4'>
        <Articles articles = {otherArticle}/>
       </div>
    </>
  )
}

export default Article
