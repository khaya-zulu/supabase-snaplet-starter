"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";

type Todo = {
  id: string;
  created_at: string;
  title: string;
  is_complete: boolean;
  user_id: string;
};

export default function ClientComponent() {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Create a Supabase client configured to use cookies
  const supabase = createClientComponentClient();

  useEffect(() => {
    const getTodos = async () => {
      // This assumes you have a `todos` table in Supabase. make sure
      // you generate your items using the `snaplet.config.ts` config.
      const { data } = await supabase.from("todos").select("*");

      if (data) {
        setTodos(data);
      }
    };

    getTodos();
  }, [supabase, setTodos]);

  return (
    <div className="space-y-2">
      {todos.map((item) => (
        <div className="text-white rounded-lg border p-6 w-96 relative">
          <div className="flex gap-4">{item.title}</div>
          <div className="text-slate-200 my-2 text-sm">
            {item.user_id ? item.user_id : "Not assigned"}
          </div>
          <div className="text-right text-sm">
            {new Date(item.created_at).toDateString()}
            {"\t"}
            <span>{item.is_complete ? "✅" : "❌"}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
