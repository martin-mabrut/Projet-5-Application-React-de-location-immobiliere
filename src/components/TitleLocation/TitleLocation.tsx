import './TitleLocation.module.scss';

type TitleLocationProps = {
  title: string;
  location: string;
};

function TitleLocation({ title, location }: TitleLocationProps) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{location}</p>
    </div>
  );
}

export default TitleLocation;
