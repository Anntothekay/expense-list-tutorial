import categories from "../categories";

interface Props {
  onSelectCategory: (category: string) => void;
}

export const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      onChange={(event) => onSelectCategory(event.target.value)}
      className="form-select mb-3"
    >
      <option value="">All categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};
