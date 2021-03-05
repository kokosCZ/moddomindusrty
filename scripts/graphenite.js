const graphenite = extendContent(Item, "graphenite", {});
graphenite.localizedName = "Graphenite"
graphenite.description = "Progressed synthetic metal with low weight."
graphenite.cost = 2;
graphenite.alwaysUnlocked = true;
graphenite.color = Color.valueOf("9868AB");
graphenite.explosiveness = 0;
graphenite.radioactivity = 0;
graphenite.flammability = 0;
new TechTree.TechNode(TechTree.all.find(boolf(t=>t.content.name == "graphite")), graphenite, ItemStack.with());
