import React, {useEffect} from 'react';
import {useSnapshot} from "valtio/react";
import Stores from "@/stores";
import {useRouter} from "next/navigation";

const useUserInfo = () => {
    const {
        userInfo
    } = useSnapshot(Stores.userStore);
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== "undefined") {
            Stores.userStore.getUserInfo(() => {}, () => {
                const token = window.localStorage.getItem("access_token");
                if (token) {
                    router.push("/dang-nhap")
                }
                // router.push("/auth/sign")
            }).catch(console.log);
        }
    }, []);
    return {
        userInfo,
    };
};

export default useUserInfo;
