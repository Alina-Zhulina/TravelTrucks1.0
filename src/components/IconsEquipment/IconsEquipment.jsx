import icons from "../../img/svg/icons.svg";
import css from "./IconsEquipment.module.css";

const IconsEquipment = ({ equipment, showAllByDefault = false }) => {
  const equipmentList = [
    { name: "AC", icon: "icon-wind", condition: equipment.AC },
    { name: "Bathroom", icon: "icon-ph_shower", condition: equipment.bathroom },
    { name: "Kitchen", icon: "icon-cup-hot", condition: equipment.kitchen },
    { name: "TV", icon: "icon-tv", condition: equipment.TV },
    { name: "Radio", icon: "icon-ui-radios", condition: equipment.radio },
    {
      name: "Refrigerator",
      icon: "icon-solar_fridge-outline",
      condition: equipment.refrigerator,
    },
    {
      name: "Microwave",
      icon: "icon-lucide_microwave",
      condition: equipment.microwave,
    },
    { name: "Gas", icon: "icon-fuel-pump", condition: equipment.gas },
    {
      name: "Water",
      icon: "icon-ion_water-outline",
      condition: equipment.water,
    },
  ];
  const filteredEquipment = equipmentList.filter(({ condition }) => condition);
  const displayedEquipment = showAllByDefault
    ? filteredEquipment
    : filteredEquipment.slice(0, 5);
  return (
    <div className={css.iconContainer}>
      {displayedEquipment.map(({ name, icon }) => (
        <div className={css.iconItem} key={name}>
          <svg width={20} height={20}>
            <use href={`${icons}#${icon}`} />
          </svg>
          <p>{name}</p>
        </div>
      ))}
    </div>
  );
};

export default IconsEquipment;
