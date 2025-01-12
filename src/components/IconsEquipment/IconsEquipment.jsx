import icons from "../../img/svg/icons.svg";

const IconsEquipment = ({ equipment }) => {
  console.log(equipment);
  return (
    <div className="features-icons">
      {equipment.AC && (
        <div className="icon-container">
          <svg>
            <use href={`${icons}#icon-wind`} />
          </svg>
          <p>AC</p>
        </div>
      )}
      {equipment.bathroom && (
        <div className="icon-container">
          <svg>
            <use href={`${icons}#icon-ph_shower`} />
          </svg>
          <p>Bathroom</p>
        </div>
      )}
      {equipment.kitchen && (
        <div className="icon-container">
          <svg>
            <use href={`${icons}#icon-cup-hot`} />
          </svg>
          <p>Kitchen</p>
        </div>
      )}
      {equipment.TV && (
        <div className="icon-container">
          <svg>
            <use href={`${icons}#icon-tv`} />
          </svg>
          <p>TV</p>
        </div>
      )}
      {equipment.radio && (
        <div className="icon-container">
          <svg>
            <use href={`${icons}#icon-ui-radios`} />
          </svg>
          <p>Radio</p>
        </div>
      )}
      {equipment.refrigerator && (
        <div className="icon-container">
          <svg>
            <use href={`${icons}#icon-solar_fridge-outline`} />
          </svg>
          <p>Refrigerator</p>
        </div>
      )}
      {equipment.microwave && (
        <div className="icon-container">
          <svg>
            <use href={`${icons}#icon-lucide_microwave`} />
          </svg>
          <p>Microwave</p>
        </div>
      )}
      {equipment.gas && (
        <div className="icon-container">
          <svg>
            <use href={`${icons}#icon-fuel-pump`} />
          </svg>
          <p>Gas</p>
        </div>
      )}
      {equipment.water && (
        <div className="icon-container">
          <svg>
            <use href={`${icons}#icon-ion_water-outline`} />
          </svg>
          <p>Water</p>
        </div>
      )}
    </div>
  );
};

export default IconsEquipment;
