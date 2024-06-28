const apiUrl = "https://pb.jake1.net/api/collections/";

export async function getProjects(category, tag) {
  let projects;
  if (category) {
    const categoryObj = await kv("categories", category);
    projects = await apiCall(
      "projects",
      `?filter=(category="${categoryObj.id}")&expand=category,tags`
    );
    return projects.items || [];
  }
  if (tag) {
    const tagObj = await getTag(tag);
    projects = await apiCall(
      "projects",
      `?filter=(tags~"${tagObj.id}")&expand=category,tags`
    );
    return projects.items || [];
  } else {
    projects = await apiCall("projects", "?expand=category,tags");
    return projects.items || [];
  }
}

export async function getProject(projectSlug) {
  const project = await apiCall(
    "projects",
    `?filter=(slug="${projectSlug}")&expand=category,tags,image`
  );
  return project.items[0] || {};
}

export async function getCategories(categorySlug) {
  if (categorySlug) {
    const category = await apiCall(
      "categories",
      `?filter=(slug="${categorySlug}")`
    );
    return category.items[0] || [];
  } else {
    const categories = await apiCall("categories");
    return categories.items || [];
  }
}

export async function getTag(tagSlug, isId) {
  let slug
  if (isId) {
    const tagObj = await kv("tags", tagSlug);
    slug = tagObj.slug;
  }
  else {
    slug = tagSlug
  }
  const tag = await apiCall("tags", `?filter=(slug="${slug}")`);
  return tag.items[0];
}

export async function getTags() {
  const tags = await apiCall("tags");
  return tags.items;
}

export async function kv(table, key) {
  let lookup
  if (table === "tags") {
    lookup = await fetch(
    `https://pb.jake1.net/api/collections/${table}/records/?filter=(id="${key}")`)
  }
  else {
    lookup = await fetch(
    `https://pb.jake1.net/api/collections/${table}/records/?filter=(slug="${key}")`
  );
  }

  const res = await lookup.json();
  return res.items[0];
}

export async function apiCall(table, query) {
  const url = query
    ? `${apiUrl}${table}/records/${query}`
    : `${apiUrl}${table}/records`;
  const res = await fetch(url);
  return await res.json();
}
