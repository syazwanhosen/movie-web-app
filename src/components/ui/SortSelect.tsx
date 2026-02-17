interface SortSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export const SortSelect = ({ value, onChange }: SortSelectProps) => (
  <div className="mb-4">
    <label htmlFor="sort" className="mr-2 text-sm font-medium text-gray-700">Sort by:</label>
    <select
      id="sort"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-md border-gray-300 py-2 pl-3 pr-8 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800"
    >
      <option value="release_date.desc">Release Date</option>
      <option value="original_title.asc">Alphabetical</option>
      <option value="vote_average.desc">Rating</option>
    </select>
  </div>
);