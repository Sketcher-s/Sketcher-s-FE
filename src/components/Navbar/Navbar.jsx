import { useRecoilState } from "recoil";
import React from "react";
import { LoginState, SidebarState } from "../../recoil/recoilState";
import NavbarMember from './NavbarMember';
import NavbarNoMember from './NavbarNoMember';

const Navbar = () => {
    // 로그인 상태
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);
    // sidebar 상태
    const [isSidebarOpen, setIsSidebarOpen] = useRecoilState(SidebarState);

    // 사이드 바 이벤트
    const toggleSidebar= () =>{
        setIsSidebarOpen(!isSidebarOpen);
    }

    return(
        <>
            {isLoggedIn ? 
            <NavbarMember toggleSidebar={toggleSidebar}/> : <NavbarNoMember/>
            }
        </>
        
    );
}

export default Navbar;
