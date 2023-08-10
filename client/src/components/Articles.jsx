import { Box } from "@mui/material";
import { useEffect,useState } from "react";
import { getNews } from "../service/api.js";

//components
import Article from "./Article.jsx";

const Articles = () =>{


    const [news,setNews] = useState([]);

    useEffect(() =>{
        dailyNews();
    },[]);

    const dailyNews = async() =>{
        let response = await getNews();
        setNews(response.data);
    }

    return(
        <Box>
            {
                news.map(data => (
                  <Article data={data}/>
                ))
            }
        </Box>
    )
}

export default Articles;