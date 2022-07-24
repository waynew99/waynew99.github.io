
interface WorkCardProps {
  img: string,
  title?: string,
  description?: string,
  onClick: () => void
}

export default function WorkCard({ img, title, description, onClick }: WorkCardProps) {
  return (
    <div className='overflow-hidden cursor-pointer rounded-lg p-2' onClick={onClick}>
      <div className='h-80 overflow-hidden rounded-2xl transition-all ease-out duration-500 hover:scale-95'>
        <img className='h-full w-full object-cover' alt={title} src={img} />
      </div>
      <h1 className='mt-5 text-3xl font-medium'> {title ?? 'Project Name'} </h1>
      <h2 className='text-xl opacity-50'> {description ?? 'Description'} </h2>
    </div>
  );
}
