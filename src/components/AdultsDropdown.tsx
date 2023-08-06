import { Menu } from '@headlessui/react'
import { BsChevronDown } from 'react-icons/bs'

interface AdultsDropdownProps {
  selectedQuantity: number
  onSelectQuantityAdults: (quantity: number) => void
}

export function AdultsDropdown({
  selectedQuantity,
  onSelectQuantityAdults,
}: AdultsDropdownProps) {
  const list = [
    { name: '1 Adult', quantity: 1 },
    { name: '2 Adults', quantity: 2 },
    { name: '3 Adults', quantity: 3 },
    { name: '4 Adults', quantity: 4 },
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
            onClick={() => onSelectQuantityAdults(item.quantity)}
          >
            {item.name}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  )
}
