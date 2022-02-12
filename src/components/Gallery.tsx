import React from 'react';
import styled from  "styled-components";
import { dbService, storageService } from "../fBase";

type Props = {
    season: string
}
type PhotosProps = {
    id: string;
    imgUrl: string;
}


function Gallery({ season }: Props) {

    const [photos, setPhotos] = React.useState([]);
    React.useEffect(()=>{
        dbService.collection(season).onSnapshot((snapshot) => {
            const photosArr: any = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setPhotos(photosArr);
        });
    },[])

    return (
        <_Main>
          {photos.map((el: any, idx)=>{
              console.log(el);
              return <div key={el.id}>
                    <Img src={el.imgUrl}/>
                  </div>
          })}
        </_Main>
    )
}
const Img = styled.img`
    width: 50vw;
    height: 50vh;
    @media screen and (max-width: 780px) {
        width: 80vw;
        height: 80vh;
    }
`

const _Main = styled.div`
    margin-top: 10vh;
    margin-left: 35vw;
    @media screen and (max-width: 780px) {
    margin-top: 10vh;
    margin-left: 0px;
       text-align: center;
    }
`
export default Gallery
