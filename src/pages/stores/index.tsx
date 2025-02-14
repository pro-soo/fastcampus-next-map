import {StoreApiResponse, StoreType} from "@/interface";
import Image from "next/image";
import axios from "axios";
import {useQuery, useInfiniteQuery} from "react-query";
import Loading from "@/components/Loading";
import {useRouter} from "next/router";
import Pagination from "@/components/Pagination";
import React from "react";

export default function StoreListPage() {
    const router = useRouter();
    const {page = "1"}: any = router.query;

    const fetchStores = async ({ pageParam = 1}) => {
      const {data} = await axios("/api/stores?page="+pageParam, {
          params: {
              limit: 10,
              page: pageParam,
          },
      });
      return data;
    };

    const {data: stores, isFetching, fetchNextPage, isFetchingNextPage, hasNextPage, isError, isLoading} = useInfiniteQuery('stores', fetchStores, {
        getNextPageParam: (lastPage: any) => lastPage.data?.length > 0 ? lastPage.page + 1 : undefined,
    });

    if (isError) {
        return (
            <div className="w-full h-screen mx-auto pt-[10%] text-red-500 text-center font-semibold">
                다시 시도해주세요
            </div>
        );
    }

    return (
        <div className="px-4 md:max-w-4xl mx-auto py-8">
            <ul role="list" className="divide-y divide-gray-100">
                {isLoading ? (<Loading/>) : (stores?.pages?.map((page, index) => (
                    <React.Fragment key={index}>
                        {page.data.map((store: StoreType, i)=> (

                        ))}
                    <li className="flex justify-between gap-x-6 py-5" key={index}>
                        <div className="flex gap-x-4">
                            <Image
                                src={store?.category ? `/images/markers/${store?.category}.png` : "/images/markers/default.png"}
                                width={48} height={48} alt="아이콘 이미지"/>
                            <div>
                                <div className="text-sm font-semibold leading-9 text-gray-900">
                                    {store?.name}
                                </div>
                                <div className="mt-1 text-xs truncate font-semibold leading-5 text-gray-500">
                                    {store?.storeType}
                                </div>
                            </div>
                        </div>
                        <div className="hidden sm:flex sm:flex-col sm:items-end">
                            <div className="text-sm font-semibold leading-9 text-gray-900">
                                {store?.address}
                            </div>
                            <div className="mt-1 text-xs truncate font-semibold leading-5 text-gray-500">
                                {store?.phone || "번호없음"} | {store?.foodCertifyName} | {" "}
                                {store?.category}
                            </div>
                        </div>
                    </li>
                    </React.Fragment>
                )))}
            </ul>
            {stores?.totalPage && <Pagination total={stores?.totalPage} page={page}/>}
            <button type="button" onClick={() => fetchNextPage()}></button>
        </div>
    );
}

// export async function getServerSideProps(){
//     const stores = await axios(`${process.env.NEXT_PUBLIC_API_URL}/api/stores`);
//
//   return {
//     props: {stores: stores.data},
//   };
// }