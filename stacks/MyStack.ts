import { StackContext, RemixSite } from "sst/constructs";

export function API({ stack }: StackContext) {
  const site = new RemixSite(stack, "Site", {
    path: "remix/",
    customDomain: {
      domainName: "marthawilding.com",
      domainAlias: "www.marthawilding.com",
    },
  });

  // Add the site's URL to stack output
  stack.addOutputs({
    URL: site.url || "localhost",
  });
}
