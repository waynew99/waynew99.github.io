import data from '../Data/data.json';
import WorkCard from './WordCard';


export default function Works() {
  const wordCards = data.projects.map((project) => (
    <WorkCard
      key={project.id}
      img={project.img}
      title={project.title}
      description={project.description}
      onClick={() => window.open(project.url)}
    />
  ));

  return (
    <div className="mt-20">
      <h1 className="ml-20 text-4xl text-bold">Work.</h1>
      <div className="mt-10 mx-40 grid grid-cols-2 grid-rows-2 gap-20">
        {wordCards}
      </div>
    </div>
  );
}