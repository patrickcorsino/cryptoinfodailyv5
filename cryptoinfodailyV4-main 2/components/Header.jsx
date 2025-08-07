"use client";
import { useState } from "react";
import Link from "next/link";
import DegenToggle from "./DegenToggle";
import SearchBar from "./SearchBar";

export default function Header({ coins, degenMode, setDegenMode }) {
  return (
    <header className="card-lux card-inner flex items-center justify-between p-4 max-w-7xl mx-auto mt-6">
      <div className="flex items-center gap-6">
        <Link href="/" className="font-extrabold text-xl gold-text">
          CryptoDaily
        </Link>
        <Link href="/tools" className="text-muted hover:text-white font-semibold text-base transition">Tools</Link>
      </div>
      <div className="flex items-center gap-6">
        <SearchBar coins={coins} />
        <DegenToggle degenMode={degenMode} setDegenMode={setDegenMode} />
      </div>
    </header>
  );
}
