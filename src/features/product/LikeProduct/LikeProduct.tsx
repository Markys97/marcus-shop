import React from 'react'
import { useAppSelector,useAppDispatch} from '../../../shared'
import { setLikeProduct,removeLikeProduct} from '../../../shared/model/slices/productSlice'

interface LikeButtonType{
    idProduct:number
}

function LikeProduct({idProduct}:LikeButtonType) {
    const dispatch = useAppDispatch()
    const listproductliked = useAppSelector(state => state.product.liked)
    const isProductLiked =(liked:Array<number>,idProduct:number):boolean =>liked.includes(idProduct)?true:false
    const toggleLike =(idProduct:number) =>{
        if(!isProductLiked(listproductliked,idProduct)){
            dispatch(setLikeProduct(idProduct))
        }else{
            dispatch(removeLikeProduct(idProduct))
        }
    }
  return (
   

    <div onClick={()=> toggleLike(idProduct)} className="product__like-icon">
       
        {
            !isProductLiked(listproductliked,idProduct)?(
                <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.24806 2.31668L9.25335 2.31145L9.6643 2.71832L10.0158 3.06636L10.3676 2.71857L11.1301 1.96477L11.1316 1.96322C11.5849 1.51113 12.1243 1.15171 12.7191 0.905864C13.3139 0.660014 13.9522 0.532665 14.5972 0.531269C15.2422 0.529872 15.8811 0.654457 16.477 0.897731C17.0728 1.141 17.6139 1.49809 18.0692 1.94822C18.5244 2.39834 18.885 2.93262 19.1304 3.52024C19.3759 4.10785 19.5014 4.7374 19.5 5.37279C19.4986 6.00818 19.3703 6.63718 19.1222 7.22372C18.8742 7.81028 18.5113 8.343 18.054 8.79115L18.0524 8.79272L10.428 16.3318L10.4279 16.3319C10.3744 16.3848 10.3106 16.4271 10.24 16.4561C10.1693 16.485 10.0934 16.5 10.0166 16.5C9.93982 16.5 9.8639 16.485 9.79327 16.4561C9.72263 16.4271 9.65884 16.3849 9.60537 16.3319L9.60518 16.3317L1.97973 8.79269L1.97976 8.79266L1.97517 8.78824C1.51166 8.34152 1.1428 7.80856 0.889708 7.22045C0.636617 6.63235 0.50424 6.00063 0.5001 5.36188C0.495961 4.72313 0.620139 4.0898 0.865579 3.49856C1.11102 2.90731 1.47293 2.36974 1.93059 1.91721C2.38826 1.46466 2.93257 1.10616 3.53211 0.862784C4.13166 0.619405 4.77431 0.496078 5.42275 0.500095C6.07118 0.504112 6.71221 0.635391 7.30861 0.88617C7.90499 1.13695 8.4447 1.50215 8.89658 1.96031L9.24806 2.31668Z" stroke="#CECCCC"/>
                </svg>
            ):(
            <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.25364 1.60814L10.0161 2.363L10.7785 1.60921C11.2784 1.11062 11.873 0.714567 12.5281 0.44378C13.1833 0.172993 13.8861 0.0328074 14.5961 0.0312701C15.3062 0.0297328 16.0096 0.166874 16.6659 0.434822C17.3223 0.702769 17.9186 1.09625 18.4207 1.59266C18.9228 2.08908 19.3208 2.67865 19.5918 3.32754C19.8628 3.97643 20.0015 4.67186 20 5.37389C19.9984 6.07593 19.8566 6.77075 19.5827 7.41846C19.3089 8.06617 18.9083 8.65402 18.404 9.14825L10.7796 16.6873C10.6794 16.7864 10.5605 16.8651 10.4296 16.9187C10.2987 16.9724 10.1583 17 10.0166 17C9.8749 17 9.73457 16.9724 9.60365 16.9187C9.47273 16.8651 9.3538 16.7864 9.25364 16.6873L1.62819 9.14825C1.11704 8.65561 0.709911 8.06752 0.430432 7.4181C0.150953 6.76868 0.00468432 6.07086 0.000110684 5.36512C-0.00446296 4.65938 0.132749 3.95976 0.403789 3.30685C0.674828 2.65395 1.0743 2.06075 1.57903 1.56167C2.08376 1.06259 2.6837 0.66756 3.34405 0.3995C4.0044 0.131439 4.71201 -0.00431735 5.42584 0.000104652C6.13968 0.00452666 6.84551 0.149039 7.50241 0.42526C8.15932 0.701481 8.7542 1.10391 9.25256 1.60921L9.25364 1.60814Z" fill="#FF0736"/>
            </svg>
            )
        }
    </div>

  )
}

export default LikeProduct