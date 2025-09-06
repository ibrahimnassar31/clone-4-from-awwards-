"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Search, ShoppingCart, User, ChevronDown, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import FadeInDown from '@/components/animations/fade-in-down';

const MobileNavLinks = () => (
  <nav className="flex flex-col gap-4 p-6 text-lg font-medium">
    <Link href="/deals-and-offers/" className="flex items-center gap-2 text-red-600">
      <Tag className="h-5 w-5" /> Special deals
    </Link>
    <Link href="/custom-signs/" className="text-foreground">Products</Link>
    <Link href="/templates/" className="text-foreground">Templates</Link>
    <Link href="/quote/" className="text-foreground">Get a Quote</Link>
  </nav>
);

const NavigationHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/deals-and-offers/', text: 'Special deals', icon: Tag, special: true },
    { href: '/custom-signs/', text: 'Products' },
    { href: '/templates/', text: 'Templates' },
    { href: '/quote/', text: 'Get a Quote' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-[0_4px_15px_0_rgba(0,0,0,0.05)]">
      <div className="container mx-auto px-6">
        <div className="flex h-[72px] items-center justify-between">
          <div className="flex items-center gap-4">
            <FadeInDown staggerIndex={0}>
              <div className="lg:hidden">
                <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="-ml-2">
                      <Menu className="h-6 w-6" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[300px] p-0">
                    <MobileNavLinks />
                  </SheetContent>
                </Sheet>
              </div>
            </FadeInDown>
            <FadeInDown staggerIndex={1}>
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/svgs/logo_icon_medium-2.svg"
                  alt="Square Signs"
                  width={170}
                  height={28}
                  className="h-7 w-auto"
                  priority
                />
              </Link>
            </FadeInDown>
          </div>

          <div className="flex items-center gap-1 md:gap-2">
            <FadeInDown staggerIndex={0}>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Search className="h-6 w-6" />
                <span className="sr-only">Search</span>
              </Button>
            </FadeInDown>
            <FadeInDown staggerIndex={1}>
              <Button asChild variant="outline" className="hidden lg:inline-flex border-primary-teal text-primary-teal hover:bg-primary-teal/10 hover:text-primary-teal rounded-full h-10 px-6 font-medium text-sm">
                <Link href="/designer/">Design Tool</Link>
              </Button>
            </FadeInDown>
            <FadeInDown staggerIndex={2}>
              <Link href="/shopping-cart/" className="flex items-center gap-1 text-sm font-medium text-foreground p-2">
                <div className="relative">
                  <ShoppingCart className="h-6 w-6" />
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary-teal text-[10px] font-bold text-white">0</span>
                </div>
                <span className="hidden xl:inline">Cart</span>
              </Link>
            </FadeInDown>
            <FadeInDown staggerIndex={3}>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="hidden lg:flex items-center gap-2 px-2 hover:bg-gray-100">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
                      <User className="h-5 w-5 text-gray-500" />
                    </div>
                    <span className="font-medium text-sm text-foreground">My Account</span>
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem>Sign In</DropdownMenuItem>
                  <DropdownMenuItem>Sign Up</DropdownMenuItem>
                  <DropdownMenuItem>
                    My Designs
                    <span className="ml-auto text-muted-foreground text-sm">0</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </FadeInDown>
          </div>
        </div>
      </div>

      {/* Bottom gray bar */}
      <nav className="hidden lg:block bg-secondary border-y border-border">
        <div className="container mx-auto px-6">
          <ul className="flex h-12 items-center justify-start gap-8">
            {navLinks.map((link, i) => (
              <li key={link.text}>
                <FadeInDown staggerIndex={i}>
                  <Link 
                    href={link.href} 
                    className={`flex items-center gap-1.5 text-sm font-semibold transition-colors ${link.special ? 'text-red-600 hover:text-red-700' : 'text-foreground hover:text-primary-teal'}`}
                  >
                    {link.icon && <link.icon className="h-4 w-4" />}
                    {link.text}
                  </Link>
                </FadeInDown>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavigationHeader;
