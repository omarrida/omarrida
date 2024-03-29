import React from "react"
import RealBlocksLogo from "../components/realblocks-logo"

function BlogPost({ title, description, medium }) {
  return (
    <div className={"flex items-center p-8 pt-0 xl:flex-none xl:inline-block xl:w-1/3"}>
      <div className="max-w-sm w-full lg:max-w-full">
        <a href={medium} target="_blank">
          <div
            className="lg:w-2/3 xl:w-full shadow border-r border-b border-l border-t border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div>
              <div className="text-gray-900 font-sans font-bold text-sm mb-2">{title}</div>
              <p className="text-gray-700 font-sans text-sm">{description}</p>
              <div className={"flex"}>
                <div className={"flex-initial"}>
                  <RealBlocksLogo/>
                </div>
                <span className={"flex-1 align-text-bottom inline-block ml-4 font-sans text-xs mt-4"}>Published on RealBlocks</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default BlogPost