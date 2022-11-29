import Head from "next/head";
import React, { useState } from "react";
import Button from "../components/Button/Button";
import Form from "../components/Form/Form";
import Header from "../components/Header/Header";
import UserList from "../components/UserList/UserList";
import { SearchRes } from "../types/SearchRes";
import { User } from "../types/User.d";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [search, SetSearch] = useState("");
  const [result, setResult] = useState<SearchRes | null>(null);

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (search) {
      setIsLoading(true);
      fetch(`https://api.github.com/search/users?q=${search}&per_page=20`)
        .then((res) => res.json())
        .then((data) => {
          const users: User[] = data.items;
          const searchRes: SearchRes = {
            search: search,
            users: users,
          };
          setResult(searchRes);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <div className="space-y-5 py-10">
      <Head>
        <title>Nextjs Github Search</title>
      </Head>
      <Header />
      <form className="flex place-self-center" onSubmit={onSearch}>
        <Form value={search} onChange={(e) => SetSearch(e.target.value)} />
        <Button type="submit" isLoading={isLoading} />
      </form>
      {result && <UserList result={result} search={search} />}
    </div>
  );
}
