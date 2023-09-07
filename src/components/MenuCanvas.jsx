import MenuCanvasButton from './MenuCanvasButton'

import AtomIcon from '../icons/AtomIcon'
import PointerIcon from '../icons/PointerIcon'
import SingleConnectorIcon from '../icons/SingleConnectorIcon'
import TrashIcon from '../icons/TrashIcon'

export default function MenuCanvas () {
  return (
    <>
      <div className="flex gap-1 self-start pb-3">
        <MenuCanvasButton Icon={<PointerIcon />} />
        <MenuCanvasButton Icon={<AtomIcon />} />
        <MenuCanvasButton Icon={<SingleConnectorIcon />} />
        <MenuCanvasButton Icon={<TrashIcon />} />
      </div>
    </>
  )
}
