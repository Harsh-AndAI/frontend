import { MapPin, BriefcaseBusiness } from "lucide-react";

interface JobFiltersProps {
  location: string;
  department: string;
  onLocationChange: (value: string) => void;
  onDepartmentChange: (value: string) => void;
}

export const JobFilters = ({
  location,
  department,
  onLocationChange,
  onDepartmentChange,
}: JobFiltersProps) => {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {/* Location */}
      <div className="relative">
        <MapPin className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-orange" />

        <select
          value={location}
          onChange={(e) => onLocationChange(e.target.value)}
          className="
            w-full appearance-none
            border border-brand-border
            bg-white
            py-3.5 pl-11 pr-8
            text-sm text-brand-text-secondary
            outline-none
            cursor-pointer
            transition-colors
            hover:border-brand-grey
            focus:border-brand-orange
          "
        >
          <option value="">All Locations</option>
          <option value="Ahmedabad, India">Ahmedabad, India</option>
          <option value="Vadodara / Anand / Surendranagar">
            Vadodara / Anand / Surendranagar
          </option>
        </select>
      </div>

      {/* Department */}
      <div className="relative">
        <BriefcaseBusiness className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-orange" />

        <select
          value={department}
          onChange={(e) => onDepartmentChange(e.target.value)}
          className="
            w-full appearance-none
            border border-brand-border
            bg-white
            py-3.5 pl-11 pr-8
            text-sm text-brand-text-secondary
            outline-none
            cursor-pointer
            transition-colors
            hover:border-brand-grey
            focus:border-brand-orange
          "
        >
          <option value="">All Departments</option>
          <option value="Project Management">
            Project Management
          </option>
          <option value="Commercial">
            Commercial
          </option>
          <option value="Finance">
            Finance
          </option>
          <option value="Land & ROW">
            Land &amp; ROW
          </option>
          <option value="Project Controls">
            Project Controls
          </option>
        </select>
      </div>
    </div>
  );
};