import React from "react"
import { menu_list } from "../assets/frontend_assets/FRassets"

const MenuExplore = ({ category, setCategory }) => {
  return (
    <div>
      <div className="w-9/12 pl-29" id="Menu-item">
        <h2 className="py-3 text-4xl font-bold">Explore our menu</h2>
        <p className="text-sm text-gray-700">
          Choose from a diverse menu featuring a delectable array of dishes.
        </p>
      </div>

      <div className="flex justify-between items-center py-4 w-11/12 ml-25 pr-13">
        {menu_list.map((items, index) => (
          <div
            key={index}
            className="text-center"
            onClick={() =>
              setCategory(prev =>
                prev === items.menu_name ? "All" : items.menu_name
              )
            }
          >
            <img
              src={items.menu_image}
              alt=""
              className={
                category === items.menu_name
                  ? "w-8/12 border-3 border-amber-600 rounded-full scale-103 mb-0.5 md:ease-in-out"
                  : "w-8/12 cursor-pointer"
              }
            />
            <p className="pr-14 text-sm text-gray-700">{items.menu_name}</p>
          </div>
        ))}
      </div>
      <hr  className="w-10/12 ml-30 bg-gray-300 text-gray-300 h-0.9"/>
    </div>
 
  )
}

export default MenuExplore
