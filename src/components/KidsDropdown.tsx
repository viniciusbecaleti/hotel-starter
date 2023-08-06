import { Menu } from '@headlessui/react'
import { BsChevronDown } from 'react-icons/bs'

interface KidsDropdownProps {
  selectedQuantity: number
  onSelectQuantityKids: (quantity: number) => void
}

export function KidsDropdown({
  selectedQuantity,
  onSelectQuantityKids,
}: KidsDropdownProps) {
  const list = [
    { name: '0 Kids', quantity: 0 },
    { name: '1 Kids', quantity: 1 },
    { name: '2 Kids', quantity: 2 },
    { name: '3 Kids', quantity: 3 },
    { name: '4 Kids', quantity: 4 },
  ]

  const selectedItem = list.find((item) => item.quantity === selectedQuantity)

  return (
    <Menu as="div" className="w-full h-full bg-white relative">
      <Menu.Button className="w-full h-full flex items-center justify-between px-8">
        {selectedItem?.name}
        <BsChevronDown className="text-base text-accent-hover" />
      </Menu.Button>
      <Menu.Items
        as="ul"
        className="bg-white absolute w-full flex flex-col z-40 shadow-xl"
      >
        {list.map((item) => (
          <Menu.Item
            as="li"
            key={item.name}
            className="border-b last-of-type:border-b-0 h-12 hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer"
            onClick={() => onSelectQuantityKids(item.quantity)}
          >
            {item.name}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  )
}
