// 액션타입 선언
const OPEN_GALLERY = 'sidebar/OPEN_GALLERY' as const;
const CLOSE_GALLERY = 'sidebar/CLOSE_OPEN_GALLERY' as const;

// 액션 생성함수 선언

export const openGallery = () => ({
    type: OPEN_GALLERY
})
export const closeGallery = () => ({
    type: CLOSE_GALLERY
})

// 모든 액션 겍체들에 대한 타입을 준비해줍니다.
// ReturnType<typeof _____> 는 특정 함수의 반환값을 추론해줍니다
// 상단부에서 액션타입을 선언 할 떄 as const 를 하지 않으면 이 부분이 제대로 작동하지 않습니다.
type SidebarAction =
  | ReturnType<typeof openGallery>
  | ReturnType<typeof closeGallery>;


// 이 리덕스 모듈에서 관리 할 상태의 타입을 선언합니다
type sidebarState = {
    isGallery: boolean;
}

// 초기상태를 선언합니다.
let initialState : sidebarState = {
    isGallery: true
}

// 리듀서를 작성합니다.
// 리듀서에서는 state 와 함수의 반환값이 일치하도록 작성하세요.
// 액션에서는 우리가 방금 만든 CounterAction 을 타입으로 설정합니다.

type Props = {
    state: sidebarState,
    action: SidebarAction
}

function sidebar(state = initialState, action : SidebarAction) {
    switch(action.type){
        case OPEN_GALLERY: 
            return Object.assign({}, state, {isGallery: true});
        case CLOSE_GALLERY:
            return Object.assign({}, state, {isGallery: false});
        default:
            return state;
    }
}


export default sidebar;