import { json } from "react-router-dom";

const getStoreReadList = () =>{
// read list
    const storedlistSTR = localStorage.getItem('read-list');
    if(storedlistSTR){
        const storedlist = JSON.parse(storedlistSTR);
        return storedlist;
    }else{
        return [];
    }


}

const addToSTOREreadLIST = (id)=>{
    const storedList = getStoreReadList();
    if(storedList.includes(id)){
        alert(id,' already added');
    }else{
        storedList.push(id);
        const storedlistStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedlistStr)
    }
}

export {addToSTOREreadLIST} ;