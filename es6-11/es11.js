"use strict";

/**
 * Optional Chaining (ES11)
 *
 */
{
  const person1 = {
    name: "Wendy",
    job: {
      title: "S/W Engineer",
      manager: {
        name: "Bob",
      },
    },
  };
  const person2 = {
    name: "Bob",
  };

  // Bad Code
  {
    function printManager(person) {
      console.log(person.job.manager.name);
    }
    printManager(person1);
    // printManager(person2);
  }

  // Bad Code
  {
    function printManager(person) {
      console.log(
        person.job
          ? person.job.manager
            ? person.job.manager.name
            : undefined
          : undefined
      );
    }
    printManager(person1);
    printManager(person2);
  }

  // Bad Code
  {
    function printManager(person) {
      console.log(person.job && person.job.manager && person.job.manager.name);
    }
    printManager(person1);
    printManager(person2);
  }

  // ✨ Optional Chaining
  {
    function printManager(person) {
      console.log(person.job?.manager?.name);
    }
    printManager(person1);
    printManager(person2);
  }
}

/**
 * Nullish Coalescing Operator (ES11)
 *
 */
{
  // Logical OR operator
  // false : false, '', 0, null, undefined
  {
    const name = "Wendy";
    const userName = name || "Guest";
    console.log(userName);
  }

  {
    const name = null;
    const userName = name || "Guest";
    console.log(userName);
  }

  // Bad Code
  {
    const name = "";
    const userName = name || "Guest";
    console.log(userName);

    const num = 0;
    const message = num || "Guest";
    console.log(message);
  }

  // ✨
  {
    const name = "";
    const userName = name ?? "Guest";
    console.log(userName);

    const num = 0;
    const message = num ?? "undefined";
    console.log(message);
  }
}
