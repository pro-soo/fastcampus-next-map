import {useForm} from "react-hook-form";
import {CATEGORY_ARR, FOOD_CERTIFY_ARR, STORE_TYPE_ARR} from "@/data/store";

export default function StoreNewPage() {
    const { register, handleSubmit, formState: {errors},} = useForm();
    return (
        <form className="px-4 md:max-w-4xl mx-auto py-8" onSubmit={handleSubmit(async (data) =>{
            try {

            } catch (e){
                console.log(e);
            }
        })}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base/7 font-semibold text-gray-900">맛집 등록</h2>
                    <p className="mt-1 text-sm/6 text-gray-600">아래 내용을 입력해서 맛집을 등록해주세요.</p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                                가게명
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    {...register("name", {required: true})}
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                                {errors?.name?.type === 'required' && (
                                    <div className="pt-2 text-xs text-red-600">
                                        필수 입력사항입니다.
                                    </div>
                                ) }
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="category" className="block text-sm/6 font-medium text-gray-900">
                                카테고리
                            </label>
                            <div className="mt-2">
                                <select
                                    {...register("category", {required: true})}
                                    className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-none -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                >
                                    <option value="">카테고리 선택</option>
                                    {CATEGORY_ARR?.map((category) => (
                                        <option key={category} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                                {errors?.category?.type === 'required' && (
                                    <div className="pt-2 text-xs text-red-600">
                                        필수 입력사항입니다.
                                    </div>
                                ) }
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="phone" className="block text-sm/6 font-medium text-gray-900">
                                연락처
                            </label>
                            <div className="mt-2">
                                <input
                                    {...register("phone", {required: true})}
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                                {errors?.phone?.type === 'required' && (
                                    <div className="pt-2 text-xs text-red-600">
                                        필수 입력사항입니다.
                                    </div>
                                ) }
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="address" className="block text-sm/6 font-medium text-gray-900">
                                주소 (다음 주소 검색 API)
                            </label>
                            <div className="mt-2">
                                <input
                                    {...register("address", {required: true})}
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                                {errors?.address?.type === 'required' && (
                                    <div className="pt-2 text-xs text-red-600">
                                        필수 입력사항입니다.
                                    </div>
                                ) }
                            </div>
                        </div>

                        <div className="sm:col-span-2 sm:col-start-1">
                            <label htmlFor="foodCertifyName" className="block text-sm/6 font-medium text-gray-900">
                                식품인증구분
                            </label>
                            <div className="mt-2">
                                <select
                                    {...register("foodCertifyName",{required: true})}
                                    className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-none -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                >
                                    <option value="">식품인증구분 선택</option>
                                    {FOOD_CERTIFY_ARR?.map((data)=>(
                                        <option key={data} value={data}>{data}</option>
                                    ))}
                                </select>
                                {errors?.foodCertifyName?.type === 'required' && (
                                    <div className="pt-2 text-xs text-red-600">
                                        필수 입력사항입니다.
                                    </div>
                                ) }
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="storeType" className="block text-sm/6 font-medium text-gray-900">
                                업종구분
                            </label>
                            <div className="mt-2">
                                <select
                                    {...register("storeType",{required: true})}
                                    className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-none -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                >
                                    <option value="">업종구분 선택</option>
                                    {STORE_TYPE_ARR?.map((data)=>(
                                        <option key={data} value={data}>{data}</option>
                                    ))}
                                </select>
                                {errors?.storeType?.type === 'required' && (
                                    <div className="pt-2 text-xs text-red-600">
                                        필수 입력사항입니다.
                                    </div>
                                ) }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm/6 font-semibold text-gray-900">
                    뒤로가기
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    제출하기
                </button>
            </div>
        </form>
    )
}
