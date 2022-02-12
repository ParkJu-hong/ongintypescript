import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { dbService, storageService } from '../../fBase';

// 참고
// https://goforit.tistory.com/82

function Upload() {
    const [season, setSeason] = React.useState('');
    const [attachment, setAttachment] = React.useState("");

    const onChangeSeason = (e: any) => {
        const { target: { name } } = e;
        setSeason(name);
    }

    const onFileChange = (event:any) =>{
        const { target: {files},} = event;
        const theFile = files[0];
        //fileReaderAPI 
        const reader = new FileReader();
        // 중요 npm i stream 해야함
        reader.onloadend = (finishedEvent : any) => {
            // 파일 로딩이 끝날시 호출되는 함수
            const {currentTarget: { result }} = finishedEvent
            setAttachment(result)
        }
        reader.readAsDataURL(theFile);
    }
    const onSubmit = async (event: any) => {
        // 페이지 렌더링 못하도록 막는 함수 
        event.preventDefault();

        const fileRef = storageService.ref().child(`${season}/${uuidv4()}`);
        const response = await fileRef.putString(attachment, "data_url");
        let attachmentUrl = await response.ref.getDownloadURL();

        await dbService.collection(season).add({
            imgUrl: attachmentUrl
        });

    };
    return (
        <div>
            <section>
                <button
                    name="spring"
                    onClick={onChangeSeason}
                >spring</button>
                <button
                    name="summer"
                    onClick={onChangeSeason}
                >summer</button>
                <button
                    name="autumn"
                    onClick={onChangeSeason}
                >autumn</button>
                <button
                    name="winter"
                    onClick={onChangeSeason}
                >winter</button>
            </section>
            {season.length !== 0 &&
                <form>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={onFileChange}
                    />
                    <input
                        type="submit"
                        value="업로드"
                        onClick={onSubmit}
                    />
                </form>
            }
        </div>
    )
}

export default Upload
