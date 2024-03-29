//"use client"
import DataTable from "@/components/Auto/UI/DataTable"
import SeoComponent from "@/components/SEO"
import { Page } from "@/stories/Page"
import { Metadata } from "next"
import dynamic from "next/dynamic"
import { Suspense } from "react"

export async function generateMetadata(): Promise<Metadata>{
    const title = ""
    return SeoComponent({
      title: title,
      description: title,
      url: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/`,
      imageUrl: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/og?title=${title}`
    }
  )
}

/* export const revalidate = 0; */

export default async function Home(){

  return (
    <>
      <h1 className="text-3xl">Template!</h1>
      <DataTable />
    </>
  )
}