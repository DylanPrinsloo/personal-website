"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Aca() {
  const [selectedYear, setSelectedYear] = useState<string>("all");

  const modules = [
    // Year 1 Level 4 - Compulsory - 8 modules
    { code: "CM1005", name: "Introduction to Programming I", year: "1" },
    { code: "CM1010", name: "Introduction to Programming II", year: "1" },
    { code: "CM1015", name: "Computational Mathematics", year: "1" },
    { code: "CM1020", name: "Discrete Mathematics", year: "1" },
    { code: "CM1025", name: "Fundamentals of Computer Science", year: "1" },
    { code: "CM1030", name: "How Computers Work", year: "1" },
    { code: "CM1035", name: "Algorithms and Data Structures I", year: "1" },
    { code: "CM1040", name: "Web Development", year: "1" },

    // Year 2 Modules - 8 modules
    { code: "CM2005", name: "Object Oriented Programming", year: "2" },
    { code: "CM2010", name: "Software Design and Development", year: "2" },
    { code: "CM2015", name: "Programming with Data", year: "2" },
    { code: "CM2020", name: "Agile Software Projects", year: "2" },
    { code: "CM2025", name: "Computer Security", year: "2" },
    { code: "CM2030", name: "Graphics Programming", year: "2" },
    { code: "CM2035", name: "Algorithms and Data Structures II", year: "2" },
    { code: "CM2040", name: "Databases, Networks and the Web", year: "2" },

    // Year 3 Level 6 - Core Electives (5 modules)
    { code: "CM3005", name: "Databases and Advanced Data Techniques", year: "3" },
    { code: "CM3015", name: "Machine Learning and Neural Networks", year: "3" },
    { code: "CM3020", name: "Artificial Intelligence", year: "3" },
    { code: "CM3025", name: "Natural Language Processing", year: "3" },
    { code: "CM3030", name: "Intelligent Signal Processing", year: "3" },
    
    // Year 3 Level 6 - Chosen Specialism Elective (1 module)
    { code: "CM3065", name: "Data Science", year: "3", isSpecialism: true },
    
    // Final Project
    { code: "CM3070", name: "Final Project", year: "3", isCapstone: true },
  ];

  const filteredModules = selectedYear === "all" 
    ? modules 
    : modules.filter(module => module.year === selectedYear);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 md:px-8 w-full pb-32">
      <section id="academics-intro" className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Academics</h2>
        
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          My academic journey at the University of London, focusing on Computer Science and the knowledge I've gained along the way.
        </p>
      </section>

      <section id="modules" className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Computer Science Modules</h2>
        
        {/* Filter Controls */}
        <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Filter by Year:
          </label>
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger className="w-full sm:w-[180px] font-mono">
              <SelectValue placeholder="Select year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Years</SelectItem>
              <SelectItem value="1">Year 1</SelectItem>
              <SelectItem value="2">Year 2</SelectItem>
              <SelectItem value="3">Year 3</SelectItem>
            </SelectContent>
          </Select>
          <span className="text-sm text-gray-500 dark:text-gray-400 font-mono">
            Showing {filteredModules.length} module{filteredModules.length !== 1 ? 's' : ''}
          </span>
        </div>
        
        {/* Desktop Table View */}
        <div className="hidden md:block">
          <Table className="font-mono">
            <TableCaption>University of London Computer Science Programme</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Module Code</TableHead>
                <TableHead>Module Name</TableHead>
                <TableHead>Year</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredModules.map((module) => (
                <TableRow 
                  key={module.code}
                  className={
                    module.isCapstone 
                      ? "bg-amber-50 dark:bg-amber-950/20" 
                      : module.isSpecialism 
                      ? "bg-blue-50 dark:bg-blue-950/20"
                      : ""
                  }
                >
                  <TableCell className="font-medium">{module.code}</TableCell>
                  <TableCell className={module.isCapstone || module.isSpecialism ? "font-semibold" : ""}>
                    {module.name}
                    {module.isSpecialism && (
                      <span className="ml-2 text-xs px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100 rounded-full">
                        Minor
                      </span>
                    )}
                  </TableCell>
                  <TableCell>Year {module.year}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          {filteredModules.map((module) => (
            <div 
              key={module.code}
              className={`p-4 border border-border rounded-lg font-mono ${
                module.isCapstone 
                  ? "bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800" 
                  : module.isSpecialism
                  ? "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800"
                  : "bg-card"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-sm text-muted-foreground">
                  {module.code}
                </span>
                <div className="flex items-center gap-2">
                  {module.isSpecialism && (
                    <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100 rounded-full">
                      Specialism
                    </span>
                  )}
                  <span className="text-xs px-2 py-1 bg-muted rounded-full">
                    Year {module.year}
                  </span>
                </div>
              </div>
              <h3 className={`text-base ${module.isCapstone || module.isSpecialism ? "font-semibold" : "font-medium"} text-foreground`}>
                {module.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section id="navigation" className="mb-16">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4 font-mono">
          Click here to navigate to{" "}
          <Link 
            href="/" 
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline underline-offset-4 transition-colors font-medium"
          >
            Home
          </Link>
          {" "}or{" "}
          <Link 
            href="/pages/hackathons" 
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline underline-offset-4 transition-colors font-medium"
          >
            Hackathons
          </Link>
        </p>
      </section>
    </div>
  );
}