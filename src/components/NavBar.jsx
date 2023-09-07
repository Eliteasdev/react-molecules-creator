import { Link } from 'react-router-dom'
export default function NavBar () {
  return (
    <nav className="">
      <div className="flex flex-row gap-2 font-medium text-gray-200 text-xl">
        <Link to="/" className="bg-slate-600 p-4 rounded-md hover:bg-slate-500">
          Home
        </Link>
        <Link to="Molecule" className="bg-slate-600 p-4 rounded-md hover:bg-slate-500">
          Molecula
        </Link>
        <Link to="AR" className="bg-slate-600 p-4 rounded-md hover:bg-slate-500">
          AR
        </Link>
      </div>
    </nav>
  )
}
