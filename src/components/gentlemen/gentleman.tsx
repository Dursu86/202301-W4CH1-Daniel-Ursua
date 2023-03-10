export type gentleStructure = {
  id?: number;
  name: string;
  status: string;
  profession: string;
  picture: string;
  twitter: string;
  alternativeText: string;
  selected?: boolean;
};

export function Gentleman({
  id,
  name,
  status,
  profession,
  picture,
  twitter,
  alternativeText,
  selected,
}: gentleStructure) {
  return (
    <li className="gentleman">
      <div className="gentleman__avatar-container">
        <img
          className="gentleman__avatar"
          src={picture}
          alt={alternativeText}
        />
        <span className="gentleman__initial">F</span>
      </div>
      <div className="gentleman__data-container">
        <p className="gentleman__name">{name}</p>
        <ul className="gentleman__data-list">
          <li className="gentleman__data">
            <span className="gentleman__data-label">Profession:</span>
            {profession}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Status:</span> {status}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Twitter:</span>
            {twitter}
          </li>
        </ul>
      </div>
      <i className="icon gentleman__icon fas fa-check"></i>
      <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
    </li>
  );
}
