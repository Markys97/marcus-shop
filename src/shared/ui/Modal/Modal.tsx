import React, { useEffect } from 'react'
import './style/modal.css'
import { closeModal } from '../../model/slices/settingSlice'
import { useAppDispatch } from '../../model/hooks'
interface ModalType {
    children:React.ReactNode
}

function Modal({children}:ModalType) {
    const dispatch = useAppDispatch()

    useEffect(()=>{

        document.querySelector('.modal')?.addEventListener('click',e=>{
            let elt = e.target as unknown as HTMLElement
            if(!elt.closest('.modal__content')){
                dispatch(closeModal())
            }

          
        })
        return  () => document.querySelector('.modal')?.removeEventListener('click',(e)=>{})
    },[])
   

  

  return (
    <div className='modal'>
        <div  className="modal__container wrapper">
            
            <div  className="modal__content">
                <button onClick={(e)=> dispatch(closeModal())} className="modal__close">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.8173 11.9983L23.409 3.42536C23.7852 3.04906 23.9966 2.53869 23.9966 2.00653C23.9966 1.47437 23.7852 0.963996 23.409 0.587699C23.0327 0.211402 22.5224 0 21.9903 0C21.4583 0 20.948 0.211402 20.5717 0.587699L12 9.18062L3.42828 0.587699C3.05204 0.211402 2.54174 -3.96493e-09 2.00965 0C1.47757 3.96494e-09 0.967269 0.211402 0.591025 0.587699C0.214782 0.963996 0.00340991 1.47437 0.00340991 2.00653C0.0034099 2.53869 0.214782 3.04906 0.591025 3.42536L9.18272 11.9983L0.591025 20.5712C0.40375 20.757 0.255105 20.978 0.153666 21.2215C0.0522265 21.4651 0 21.7263 0 21.9901C0 22.2539 0.0522265 22.5151 0.153666 22.7586C0.255105 23.0021 0.40375 23.2231 0.591025 23.4089C0.776772 23.5962 0.99776 23.7449 1.24124 23.8463C1.48473 23.9478 1.74589 24 2.00965 24C2.27342 24 2.53458 23.9478 2.77807 23.8463C3.02155 23.7449 3.24254 23.5962 3.42828 23.4089L12 14.816L20.5717 23.4089C20.7575 23.5962 20.9785 23.7449 21.2219 23.8463C21.4654 23.9478 21.7266 24 21.9903 24C22.2541 24 22.5153 23.9478 22.7588 23.8463C23.0022 23.7449 23.2232 23.5962 23.409 23.4089C23.5962 23.2231 23.7449 23.0021 23.8463 22.7586C23.9478 22.5151 24 22.2539 24 21.9901C24 21.7263 23.9478 21.4651 23.8463 21.2215C23.7449 20.978 23.5962 20.757 23.409 20.5712L14.8173 11.9983Z" fill="#6F6F6E"/>
                    </svg>
                </button>
                <div className="modal__body">
                   {children}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal