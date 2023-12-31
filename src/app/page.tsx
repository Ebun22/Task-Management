import Image from 'next/image'
import { TodoList } from './components'

export default function Home() {
  return (
    <div className="h-screen w-full">
      <h1 className="text-3xl sm:text-4xl font-black tracking-wide text-center pt-20 pb-10 sm:pb-10">
        My Todo Home page
      </h1>
        <TodoList />
    </div>

  )
}
