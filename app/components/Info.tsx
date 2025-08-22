import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/app/ui/dropdown-menu';
import { ShoppingCart } from 'lucide-react';
import UseTooltip from '../core/partials/tooltip';
import { RouteChartApp } from '../config/route.config';
import Link from 'next/link';

const DropDownMenuHome: React.FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UseTooltip content="Notafikasi">
          <ShoppingCart />
        </UseTooltip>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="text-md md:text-4xl font-bold">Loka-Loka</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {RouteChartApp.map((items, key) => (
          <Link key={key} href={items.href}>
            <DropdownMenuItem>{items.title}</DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownMenuHome;
