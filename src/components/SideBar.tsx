import { Button } from './Button';
import { GenreResponseProps } from '../interfaces/GenreResponseProps';

interface SideBarProps {
  handleClickButton: (id: number) => void;
  selectedGenreId: number;
  genres: GenreResponseProps[];
}

export function SideBar({
  handleClickButton,
  selectedGenreId,
  genres,
}: SideBarProps) {
  // Complete aqui

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
