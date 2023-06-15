import React, { useState } from 'react'
import {useRecoilState} from 'recoil';
import {recommendationState} from '../atoms/modalAtom';
import MuiModal from '@mui/material/Modal'
import XIcon from '@heroicons/react/outline/XIcon';
import toast, { Toaster } from 'react-hot-toast';

function ModalRecommendation() 
{
    const [showRecommendations,setshowRecommendations]  = useRecoilState(recommendationState); //state for IRecommend

    const handleClose = () => 
    {
      setshowRecommendations(false);
      toast.dismiss;
    }
    
    const centerScreen = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
      };
    return(
        <MuiModal
          open={showRecommendations}
          onClose={handleClose}
          className="fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide"
        >
          <>
          <Toaster position="bottom-center" />
        <button
          className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]"
          onClick={handleClose}
        >
          <XIcon className="h-6 w-6" />
        </button>

        </>
        </MuiModal>
  )
};

export default ModalRecommendation;
//Change ChatBot here.