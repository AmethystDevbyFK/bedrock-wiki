if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let t={};const r=s=>l(s,a),u={module:{uri:a},exports:t,require:r};e[a]=Promise.all(n.map((s=>u[s]||r(s)))).then((s=>(i(...s),t)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.md.520a668d.js",revision:null},{url:"assets/404.md.520a668d.lean.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.796df9f7.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.796df9f7.lean.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.5faa14a5.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.5faa14a5.lean.js",revision:null},{url:"assets/animation-controllers_death-commands.md.5a9ebaec.js",revision:null},{url:"assets/animation-controllers_death-commands.md.5a9ebaec.lean.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.975acde8.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.975acde8.lean.js",revision:null},{url:"assets/animation-controllers_index.md.74d5323d.js",revision:null},{url:"assets/animation-controllers_index.md.74d5323d.lean.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.f8b1a479.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.f8b1a479.lean.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.91b1ea9a.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.91b1ea9a.lean.js",revision:null},{url:"assets/app.1f43d3ab.js",revision:null},{url:"assets/blocks_applying-effects.md.177db1de.js",revision:null},{url:"assets/blocks_applying-effects.md.177db1de.lean.js",revision:null},{url:"assets/blocks_avoiding-state-limit.md.234d40e9.js",revision:null},{url:"assets/blocks_avoiding-state-limit.md.234d40e9.lean.js",revision:null},{url:"assets/blocks_block-components.md.3db066a5.js",revision:null},{url:"assets/blocks_block-components.md.3db066a5.lean.js",revision:null},{url:"assets/blocks_block-culling.md.d28daaa7.js",revision:null},{url:"assets/blocks_block-culling.md.d28daaa7.lean.js",revision:null},{url:"assets/blocks_block-events.md.95500873.js",revision:null},{url:"assets/blocks_block-events.md.95500873.lean.js",revision:null},{url:"assets/blocks_block-models.md.4d677d11.js",revision:null},{url:"assets/blocks_block-models.md.4d677d11.lean.js",revision:null},{url:"assets/blocks_block-permutations.md.8d75b203.js",revision:null},{url:"assets/blocks_block-permutations.md.8d75b203.lean.js",revision:null},{url:"assets/blocks_block-shapes.md.51273d3d.js",revision:null},{url:"assets/blocks_block-shapes.md.51273d3d.lean.js",revision:null},{url:"assets/blocks_block-sounds.md.b8815264.js",revision:null},{url:"assets/blocks_block-sounds.md.b8815264.lean.js",revision:null},{url:"assets/blocks_block-states.md.9c54698d.js",revision:null},{url:"assets/blocks_block-states.md.9c54698d.lean.js",revision:null},{url:"assets/blocks_block-tags.md.acb7ecf2.js",revision:null},{url:"assets/blocks_block-tags.md.acb7ecf2.lean.js",revision:null},{url:"assets/blocks_block-texture-variation.md.1eea40bb.js",revision:null},{url:"assets/blocks_block-texture-variation.md.1eea40bb.lean.js",revision:null},{url:"assets/blocks_block-traits.md.8a948f24.js",revision:null},{url:"assets/blocks_block-traits.md.8a948f24.lean.js",revision:null},{url:"assets/blocks_blocks-intro.md.fa2eb415.js",revision:null},{url:"assets/blocks_blocks-intro.md.fa2eb415.lean.js",revision:null},{url:"assets/blocks_custom-crops.md.6569f0e1.js",revision:null},{url:"assets/blocks_custom-crops.md.6569f0e1.lean.js",revision:null},{url:"assets/blocks_custom-fluids.md.4e34acea.js",revision:null},{url:"assets/blocks_custom-fluids.md.4e34acea.lean.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.e810e941.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.e810e941.lean.js",revision:null},{url:"assets/blocks_custom-glazed-terracotta.md.4f4e3848.js",revision:null},{url:"assets/blocks_custom-glazed-terracotta.md.4f4e3848.lean.js",revision:null},{url:"assets/blocks_custom-slabs.md.d81ea35d.js",revision:null},{url:"assets/blocks_custom-slabs.md.d81ea35d.lean.js",revision:null},{url:"assets/blocks_custom-trapdoors.md.a0d30d50.js",revision:null},{url:"assets/blocks_custom-trapdoors.md.a0d30d50.lean.js",revision:null},{url:"assets/blocks_custom-trees.md.1d2b0ac2.js",revision:null},{url:"assets/blocks_custom-trees.md.1d2b0ac2.lean.js",revision:null},{url:"assets/blocks_fake-blocks.md.85d7e247.js",revision:null},{url:"assets/blocks_fake-blocks.md.85d7e247.lean.js",revision:null},{url:"assets/blocks_flipbook-textures.md.811c5c30.js",revision:null},{url:"assets/blocks_flipbook-textures.md.811c5c30.lean.js",revision:null},{url:"assets/blocks_index.md.580d0baf.js",revision:null},{url:"assets/blocks_index.md.580d0baf.lean.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.0b0ee03e.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.0b0ee03e.lean.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.4c552ed3.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.4c552ed3.lean.js",revision:null},{url:"assets/blocks_precise-interaction.md.71037c94.js",revision:null},{url:"assets/blocks_precise-interaction.md.71037c94.lean.js",revision:null},{url:"assets/blocks_precise-rotation.md.63defb26.js",revision:null},{url:"assets/blocks_precise-rotation.md.63defb26.lean.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.657426aa.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.657426aa.lean.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.4181541e.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.4181541e.lean.js",revision:null},{url:"assets/chunks/3.035a77e6.js",revision:null},{url:"assets/chunks/4.bf191be1.js",revision:null},{url:"assets/chunks/6.07d6a5aa.js",revision:null},{url:"assets/chunks/AlgoliaSearch.56db4466.js",revision:null},{url:"assets/chunks/compound.3f8f82ad.js",revision:null},{url:"assets/chunks/content_log.09e62547.js",revision:null},{url:"assets/chunks/Contributors.27dee160.js",revision:null},{url:"assets/chunks/gametick.8221204e.js",revision:null},{url:"assets/chunks/settings_2.b0f9bbd3.js",revision:null},{url:"assets/chunks/snippets.5bdbd1d4.js",revision:null},{url:"assets/chunks/structure.a9b5a4fc.js",revision:null},{url:"assets/commands_block-entities.md.03579ee4.js",revision:null},{url:"assets/commands_block-entities.md.03579ee4.lean.js",revision:null},{url:"assets/commands_block-states.md.4b805211.js",revision:null},{url:"assets/commands_block-states.md.4b805211.lean.js",revision:null},{url:"assets/commands_damage.md.8cbf0e1f.js",revision:null},{url:"assets/commands_damage.md.8cbf0e1f.lean.js",revision:null},{url:"assets/commands_entity-counter.md.22b88959.js",revision:null},{url:"assets/commands_entity-counter.md.22b88959.lean.js",revision:null},{url:"assets/commands_index.md.94326c63.js",revision:null},{url:"assets/commands_index.md.94326c63.lean.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.ca48ef76.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.ca48ef76.lean.js",revision:null},{url:"assets/commands_logic-gates.md.07caaaa5.js",revision:null},{url:"assets/commands_logic-gates.md.07caaaa5.lean.js",revision:null},{url:"assets/commands_mcfunctions.md.d7e1c3a6.js",revision:null},{url:"assets/commands_mcfunctions.md.d7e1c3a6.lean.js",revision:null},{url:"assets/commands_nbt-commands.md.d0709d9e.js",revision:null},{url:"assets/commands_nbt-commands.md.d0709d9e.lean.js",revision:null},{url:"assets/commands_new-execute.md.2d03e766.js",revision:null},{url:"assets/commands_new-execute.md.2d03e766.lean.js",revision:null},{url:"assets/commands_on-first-join.md.c458f0d0.js",revision:null},{url:"assets/commands_on-first-join.md.c458f0d0.lean.js",revision:null},{url:"assets/commands_on-first-world-load.md.c63e93f6.js",revision:null},{url:"assets/commands_on-first-world-load.md.c63e93f6.lean.js",revision:null},{url:"assets/commands_on-player-death.md.bba3f3a6.js",revision:null},{url:"assets/commands_on-player-death.md.bba3f3a6.lean.js",revision:null},{url:"assets/commands_on-player-join.md.7dd5b54b.js",revision:null},{url:"assets/commands_on-player-join.md.7dd5b54b.lean.js",revision:null},{url:"assets/commands_on-player-leave.md.b8db24f0.js",revision:null},{url:"assets/commands_on-player-leave.md.b8db24f0.lean.js",revision:null},{url:"assets/commands_on-player-respawn.md.7e5a2a53.js",revision:null},{url:"assets/commands_on-player-respawn.md.7e5a2a53.lean.js",revision:null},{url:"assets/commands_orbital-camera.md.887c5234.js",revision:null},{url:"assets/commands_orbital-camera.md.887c5234.lean.js",revision:null},{url:"assets/commands_playsound.md.35e4bcff.js",revision:null},{url:"assets/commands_playsound.md.35e4bcff.lean.js",revision:null},{url:"assets/commands_relative-coordinates.md.cd3926b4.js",revision:null},{url:"assets/commands_relative-coordinates.md.cd3926b4.lean.js",revision:null},{url:"assets/commands_scoreboard-operations.md.4014e575.js",revision:null},{url:"assets/commands_scoreboard-operations.md.4014e575.lean.js",revision:null},{url:"assets/commands_scoreboard-timers.md.8eab877b.js",revision:null},{url:"assets/commands_scoreboard-timers.md.8eab877b.lean.js",revision:null},{url:"assets/commands_selectors.md.a66d05b1.js",revision:null},{url:"assets/commands_selectors.md.a66d05b1.lean.js",revision:null},{url:"assets/commands_tellraw.md.ff7eb120.js",revision:null},{url:"assets/commands_tellraw.md.ff7eb120.lean.js",revision:null},{url:"assets/concepts_contents.md.83f380c8.js",revision:null},{url:"assets/concepts_contents.md.83f380c8.lean.js",revision:null},{url:"assets/concepts_emojis.md.af97bcd4.js",revision:null},{url:"assets/concepts_emojis.md.af97bcd4.lean.js",revision:null},{url:"assets/concepts_index.md.0d14c897.js",revision:null},{url:"assets/concepts_index.md.0d14c897.lean.js",revision:null},{url:"assets/concepts_molang.md.6abda826.js",revision:null},{url:"assets/concepts_molang.md.6abda826.lean.js",revision:null},{url:"assets/concepts_namespaces.md.37141baf.js",revision:null},{url:"assets/concepts_namespaces.md.37141baf.lean.js",revision:null},{url:"assets/concepts_overwriting-assets.md.2e557f62.js",revision:null},{url:"assets/concepts_overwriting-assets.md.2e557f62.lean.js",revision:null},{url:"assets/concepts_shaders.md.6bbe4470.js",revision:null},{url:"assets/concepts_shaders.md.6bbe4470.lean.js",revision:null},{url:"assets/concepts_sounds.md.23b31cd5.js",revision:null},{url:"assets/concepts_sounds.md.23b31cd5.lean.js",revision:null},{url:"assets/concepts_subpacks.md.1980c3ef.js",revision:null},{url:"assets/concepts_subpacks.md.1980c3ef.lean.js",revision:null},{url:"assets/concepts_text-and-translations.md.5dd7904c.js",revision:null},{url:"assets/concepts_text-and-translations.md.5dd7904c.lean.js",revision:null},{url:"assets/concepts_textures-list.md.b4d9c42b.js",revision:null},{url:"assets/concepts_textures-list.md.b4d9c42b.lean.js",revision:null},{url:"assets/contribute-how-to.md.d4301000.js",revision:null},{url:"assets/contribute-how-to.md.d4301000.lean.js",revision:null},{url:"assets/contribute-style.md.9da86126.js",revision:null},{url:"assets/contribute-style.md.9da86126.lean.js",revision:null},{url:"assets/contribute.md.9534aee6.js",revision:null},{url:"assets/contribute.md.9534aee6.lean.js",revision:null},{url:"assets/discord.md.bd6c45cc.js",revision:null},{url:"assets/discord.md.bd6c45cc.lean.js",revision:null},{url:"assets/documentation_advanced-molang.md.216b31ef.js",revision:null},{url:"assets/documentation_advanced-molang.md.216b31ef.lean.js",revision:null},{url:"assets/documentation_creative-categories.md.d94e7ac9.js",revision:null},{url:"assets/documentation_creative-categories.md.d94e7ac9.lean.js",revision:null},{url:"assets/documentation_file-types.md.488e107c.js",revision:null},{url:"assets/documentation_file-types.md.488e107c.lean.js",revision:null},{url:"assets/documentation_fog-ids.md.58d0e4ed.js",revision:null},{url:"assets/documentation_fog-ids.md.58d0e4ed.lean.js",revision:null},{url:"assets/documentation_index.md.7d220645.js",revision:null},{url:"assets/documentation_index.md.7d220645.lean.js",revision:null},{url:"assets/documentation_material-config-description.md.e6d78d04.js",revision:null},{url:"assets/documentation_material-config-description.md.e6d78d04.lean.js",revision:null},{url:"assets/documentation_materials.md.ce0337f7.js",revision:null},{url:"assets/documentation_materials.md.ce0337f7.lean.js",revision:null},{url:"assets/documentation_pack-structure.md.014f9993.js",revision:null},{url:"assets/documentation_pack-structure.md.014f9993.lean.js",revision:null},{url:"assets/documentation_projectiles.md.646a975a.js",revision:null},{url:"assets/documentation_projectiles.md.646a975a.lean.js",revision:null},{url:"assets/documentation_queries.md.b4501046.js",revision:null},{url:"assets/documentation_queries.md.b4501046.lean.js",revision:null},{url:"assets/documentation_shared-constructs.md.f0cca815.js",revision:null},{url:"assets/documentation_shared-constructs.md.f0cca815.lean.js",revision:null},{url:"assets/documentation_sound-definitions.md.d5a9ecf5.js",revision:null},{url:"assets/documentation_sound-definitions.md.d5a9ecf5.lean.js",revision:null},{url:"assets/entities_boat-entities.md.1e3f8b76.js",revision:null},{url:"assets/entities_boat-entities.md.1e3f8b76.lean.js",revision:null},{url:"assets/entities_detecting-other-entities.md.dfe428af.js",revision:null},{url:"assets/entities_detecting-other-entities.md.dfe428af.lean.js",revision:null},{url:"assets/entities_disabling-team-damage.md.5403b1ff.js",revision:null},{url:"assets/entities_disabling-team-damage.md.5403b1ff.lean.js",revision:null},{url:"assets/entities_dummy-components.md.0a1ddc4e.js",revision:null},{url:"assets/entities_dummy-components.md.0a1ddc4e.lean.js",revision:null},{url:"assets/entities_dummy-entities.md.dddbfb96.js",revision:null},{url:"assets/entities_dummy-entities.md.dddbfb96.lean.js",revision:null},{url:"assets/entities_entity-attack.md.4c8e31b8.js",revision:null},{url:"assets/entities_entity-attack.md.4c8e31b8.lean.js",revision:null},{url:"assets/entities_entity-events.md.b1d40f88.js",revision:null},{url:"assets/entities_entity-events.md.b1d40f88.lean.js",revision:null},{url:"assets/entities_entity-holds-item.md.891efee3.js",revision:null},{url:"assets/entities_entity-holds-item.md.891efee3.lean.js",revision:null},{url:"assets/entities_entity-intro-bp.md.8ecc98a1.js",revision:null},{url:"assets/entities_entity-intro-bp.md.8ecc98a1.lean.js",revision:null},{url:"assets/entities_entity-intro-rp.md.1cf4989f.js",revision:null},{url:"assets/entities_entity-intro-rp.md.1cf4989f.lean.js",revision:null},{url:"assets/entities_entity-movement.md.45f426b4.js",revision:null},{url:"assets/entities_entity-movement.md.45f426b4.lean.js",revision:null},{url:"assets/entities_entity-properties.md.6418705d.js",revision:null},{url:"assets/entities_entity-properties.md.6418705d.lean.js",revision:null},{url:"assets/entities_entity-transforms.md.831fec9b.js",revision:null},{url:"assets/entities_entity-transforms.md.831fec9b.lean.js",revision:null},{url:"assets/entities_flying-entities.md.55a1ff71.js",revision:null},{url:"assets/entities_flying-entities.md.55a1ff71.lean.js",revision:null},{url:"assets/entities_index.md.b52dd0f0.js",revision:null},{url:"assets/entities_index.md.b52dd0f0.lean.js",revision:null},{url:"assets/entities_introduction-to-aec.md.e81d4472.js",revision:null},{url:"assets/entities_introduction-to-aec.md.e81d4472.lean.js",revision:null},{url:"assets/entities_invulnerable-entities.md.94998910.js",revision:null},{url:"assets/entities_invulnerable-entities.md.94998910.lean.js",revision:null},{url:"assets/entities_look-at-entity.md.e9788561.js",revision:null},{url:"assets/entities_look-at-entity.md.e9788561.lean.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.c0e177d1.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.c0e177d1.lean.js",revision:null},{url:"assets/entities_npc-dialogs.md.cc13963c.js",revision:null},{url:"assets/entities_npc-dialogs.md.cc13963c.lean.js",revision:null},{url:"assets/entities_render-controllers.md.612e9c78.js",revision:null},{url:"assets/entities_render-controllers.md.612e9c78.lean.js",revision:null},{url:"assets/entities_runtime-identifier.md.22c9c958.js",revision:null},{url:"assets/entities_runtime-identifier.md.22c9c958.lean.js",revision:null},{url:"assets/entities_sleeping-entities.md.bb1a9cea.js",revision:null},{url:"assets/entities_sleeping-entities.md.bb1a9cea.lean.js",revision:null},{url:"assets/entities_solid-entities.md.0e632fc9.js",revision:null},{url:"assets/entities_solid-entities.md.0e632fc9.lean.js",revision:null},{url:"assets/entities_spawn-rules.md.26e07037.js",revision:null},{url:"assets/entities_spawn-rules.md.26e07037.lean.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.abef4e92.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.abef4e92.lean.js",revision:null},{url:"assets/entities_timers.md.e1691a3e.js",revision:null},{url:"assets/entities_timers.md.e1691a3e.lean.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.fc5cc08e.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.fc5cc08e.lean.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.80d6d27e.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.80d6d27e.lean.js",revision:null},{url:"assets/entities_village-mechanic.md.037484d4.js",revision:null},{url:"assets/entities_village-mechanic.md.037484d4.lean.js",revision:null},{url:"assets/entities_vuc-full.md.691b99c9.lean.js",revision:null},{url:"assets/entities_vusr-full.md.2616d040.js",revision:null},{url:"assets/entities_vusr-full.md.2616d040.lean.js",revision:null},{url:"assets/graph-test.md.9af67413.js",revision:null},{url:"assets/graph-test.md.9af67413.lean.js",revision:null},{url:"assets/guide_addons.md.3d49797a.js",revision:null},{url:"assets/guide_addons.md.3d49797a.lean.js",revision:null},{url:"assets/guide_advancedmanifest.md.4f898b4c.js",revision:null},{url:"assets/guide_advancedmanifest.md.4f898b4c.lean.js",revision:null},{url:"assets/guide_blockbench.md.a82e03cd.js",revision:null},{url:"assets/guide_blockbench.md.a82e03cd.lean.js",revision:null},{url:"assets/guide_custom-entity.md.64196e2a.js",revision:null},{url:"assets/guide_custom-entity.md.64196e2a.lean.js",revision:null},{url:"assets/guide_custom-item.md.6988ba32.js",revision:null},{url:"assets/guide_custom-item.md.6988ba32.lean.js",revision:null},{url:"assets/guide_download-packs.md.9bf82e77.js",revision:null},{url:"assets/guide_download-packs.md.9bf82e77.lean.js",revision:null},{url:"assets/guide_format-version.md.2bfecb0f.js",revision:null},{url:"assets/guide_format-version.md.2bfecb0f.lean.js",revision:null},{url:"assets/guide_index.md.fd86a373.js",revision:null},{url:"assets/guide_index.md.fd86a373.lean.js",revision:null},{url:"assets/guide_introduction.md.a75da848.js",revision:null},{url:"assets/guide_introduction.md.a75da848.lean.js",revision:null},{url:"assets/guide_loot-table.md.dfda9433.js",revision:null},{url:"assets/guide_loot-table.md.dfda9433.lean.js",revision:null},{url:"assets/guide_project-setup-android.md.be3b1dfd.js",revision:null},{url:"assets/guide_project-setup-android.md.be3b1dfd.lean.js",revision:null},{url:"assets/guide_project-setup.md.12f35ac9.js",revision:null},{url:"assets/guide_project-setup.md.12f35ac9.lean.js",revision:null},{url:"assets/guide_software-preparation.md.e6cf803b.js",revision:null},{url:"assets/guide_software-preparation.md.e6cf803b.lean.js",revision:null},{url:"assets/guide_troubleshooting.md.21717b59.js",revision:null},{url:"assets/guide_troubleshooting.md.21717b59.lean.js",revision:null},{url:"assets/guide_understanding-json.md.930bbcbd.js",revision:null},{url:"assets/guide_understanding-json.md.930bbcbd.lean.js",revision:null},{url:"assets/hacktoberfest.md.99178b9a.js",revision:null},{url:"assets/hacktoberfest.md.99178b9a.lean.js",revision:null},{url:"assets/index.md.01de1f80.js",revision:null},{url:"assets/index.md.01de1f80.lean.js",revision:null},{url:"assets/items_attachables.md.99119cde.js",revision:null},{url:"assets/items_attachables.md.99119cde.lean.js",revision:null},{url:"assets/items_custom-armor.md.9951fbb3.js",revision:null},{url:"assets/items_custom-armor.md.9951fbb3.lean.js",revision:null},{url:"assets/items_custom-pottery-sherd.md.fcf1f885.js",revision:null},{url:"assets/items_custom-pottery-sherd.md.fcf1f885.lean.js",revision:null},{url:"assets/items_custom-weapon.md.812631cd.js",revision:null},{url:"assets/items_custom-weapon.md.812631cd.lean.js",revision:null},{url:"assets/items_enchantments.md.6ca6303f.js",revision:null},{url:"assets/items_enchantments.md.6ca6303f.lean.js",revision:null},{url:"assets/items_equipped-item-commands.md.d9c2e5d0.js",revision:null},{url:"assets/items_equipped-item-commands.md.d9c2e5d0.lean.js",revision:null},{url:"assets/items_high-resolution-items.md.9d7dd1d5.js",revision:null},{url:"assets/items_high-resolution-items.md.9d7dd1d5.lean.js",revision:null},{url:"assets/items_index.md.2afb1b11.js",revision:null},{url:"assets/items_index.md.2afb1b11.lean.js",revision:null},{url:"assets/items_item-components.md.0fe76e0b.js",revision:null},{url:"assets/items_item-components.md.0fe76e0b.lean.js",revision:null},{url:"assets/items_item-identifiers.md.3d2b7639.js",revision:null},{url:"assets/items_item-identifiers.md.3d2b7639.lean.js",revision:null},{url:"assets/items_item-tags.md.56e30845.js",revision:null},{url:"assets/items_item-tags.md.56e30845.lean.js",revision:null},{url:"assets/items_items-intro.md.160381e8.js",revision:null},{url:"assets/items_items-intro.md.160381e8.lean.js",revision:null},{url:"assets/items_numerical-item-ids.md.a6f700a0.js",revision:null},{url:"assets/items_numerical-item-ids.md.a6f700a0.lean.js",revision:null},{url:"assets/items_spawning-items.md.a22e0171.js",revision:null},{url:"assets/items_spawning-items.md.a22e0171.lean.js",revision:null},{url:"assets/items_spear.md.22b1f1e9.js",revision:null},{url:"assets/items_spear.md.22b1f1e9.lean.js",revision:null},{url:"assets/items_throwable.md.814982c8.js",revision:null},{url:"assets/items_throwable.md.814982c8.lean.js",revision:null},{url:"assets/items_tool-durability.md.071ac266.js",revision:null},{url:"assets/items_tool-durability.md.071ac266.lean.js",revision:null},{url:"assets/items_troubleshooting-items.md.93753cc6.js",revision:null},{url:"assets/items_troubleshooting-items.md.93753cc6.lean.js",revision:null},{url:"assets/items_vanilla-usage-items.md.8445ea87.js",revision:null},{url:"assets/items_vanilla-usage-items.md.8445ea87.lean.js",revision:null},{url:"assets/items_vui-full.md.1fbf6ba6.js",revision:null},{url:"assets/items_vui-full.md.1fbf6ba6.lean.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.debe4480.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.debe4480.lean.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.cabd5c1d.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.cabd5c1d.lean.js",revision:null},{url:"assets/json-ui_best-practices.md.9f66bbde.js",revision:null},{url:"assets/json-ui_best-practices.md.9f66bbde.lean.js",revision:null},{url:"assets/json-ui_custom-buttons.md.bc88c76f.js",revision:null},{url:"assets/json-ui_custom-buttons.md.bc88c76f.lean.js",revision:null},{url:"assets/json-ui_index.md.315ff7bc.js",revision:null},{url:"assets/json-ui_index.md.315ff7bc.lean.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.6946303a.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.6946303a.lean.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.5db71e53.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.5db71e53.lean.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.079110ad.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.079110ad.lean.js",revision:null},{url:"assets/json-ui_string-to-number.md.860956ed.js",revision:null},{url:"assets/json-ui_string-to-number.md.860956ed.lean.js",revision:null},{url:"assets/loot_index.md.1f841732.js",revision:null},{url:"assets/loot_index.md.1f841732.lean.js",revision:null},{url:"assets/loot_item-functions.md.242e54a8.js",revision:null},{url:"assets/loot_item-functions.md.242e54a8.lean.js",revision:null},{url:"assets/loot_loot-tables.md.3c85cbf3.js",revision:null},{url:"assets/loot_loot-tables.md.3c85cbf3.lean.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.308370e3.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.308370e3.lean.js",revision:null},{url:"assets/loot_recipes.md.04a8a674.js",revision:null},{url:"assets/loot_recipes.md.04a8a674.lean.js",revision:null},{url:"assets/loot_trade-tables.md.024a6a22.js",revision:null},{url:"assets/loot_trade-tables.md.024a6a22.lean.js",revision:null},{url:"assets/loot_trading-behavior.md.2fe522f7.js",revision:null},{url:"assets/loot_trading-behavior.md.2fe522f7.lean.js",revision:null},{url:"assets/meta_addon-performance.md.9950b88e.js",revision:null},{url:"assets/meta_addon-performance.md.9950b88e.lean.js",revision:null},{url:"assets/meta_index.md.81c5d41c.js",revision:null},{url:"assets/meta_index.md.81c5d41c.lean.js",revision:null},{url:"assets/meta_jq.md.6a84aa4a.js",revision:null},{url:"assets/meta_jq.md.6a84aa4a.lean.js",revision:null},{url:"assets/meta_style-guide.md.1e2bca8f.js",revision:null},{url:"assets/meta_style-guide.md.1e2bca8f.lean.js",revision:null},{url:"assets/meta_useful-links.md.0a02508a.js",revision:null},{url:"assets/meta_useful-links.md.0a02508a.lean.js",revision:null},{url:"assets/meta_using-schemas.md.d4ce5712.js",revision:null},{url:"assets/meta_using-schemas.md.d4ce5712.lean.js",revision:null},{url:"assets/meta_version-control.md.80b1eaa7.js",revision:null},{url:"assets/meta_version-control.md.80b1eaa7.lean.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.3d522578.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.3d522578.lean.js",revision:null},{url:"assets/nbt_index.md.c0f7ec88.js",revision:null},{url:"assets/nbt_index.md.c0f7ec88.lean.js",revision:null},{url:"assets/nbt_mcstructure.md.9b78e438.js",revision:null},{url:"assets/nbt_mcstructure.md.9b78e438.lean.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.be3a2fba.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.be3a2fba.lean.js",revision:null},{url:"assets/nbt_step-by-step-example.md.1c9f087c.js",revision:null},{url:"assets/nbt_step-by-step-example.md.1c9f087c.lean.js",revision:null},{url:"assets/nbt_structure-limits.md.52925067.js",revision:null},{url:"assets/nbt_structure-limits.md.52925067.lean.js",revision:null},{url:"assets/particles_disabling-particles.md.a1eaffb4.js",revision:null},{url:"assets/particles_disabling-particles.md.a1eaffb4.lean.js",revision:null},{url:"assets/particles_index.md.d907af88.js",revision:null},{url:"assets/particles_index.md.d907af88.lean.js",revision:null},{url:"assets/particles_particles-and-sounds.md.8ab5d938.js",revision:null},{url:"assets/particles_particles-and-sounds.md.8ab5d938.lean.js",revision:null},{url:"assets/particles_particles.md.3a947e6d.js",revision:null},{url:"assets/particles_particles.md.3a947e6d.lean.js",revision:null},{url:"assets/particles_vanilla-particles.md.cc107403.js",revision:null},{url:"assets/particles_vanilla-particles.md.cc107403.lean.js",revision:null},{url:"assets/privacy.md.eeed8f6f.js",revision:null},{url:"assets/privacy.md.eeed8f6f.lean.js",revision:null},{url:"assets/scripting_api-environment.md.89046c20.js",revision:null},{url:"assets/scripting_api-environment.md.89046c20.lean.js",revision:null},{url:"assets/scripting_custom-command.md.c2bab98e.js",revision:null},{url:"assets/scripting_custom-command.md.c2bab98e.lean.js",revision:null},{url:"assets/scripting_game-tests.md.8508e060.js",revision:null},{url:"assets/scripting_game-tests.md.8508e060.lean.js",revision:null},{url:"assets/scripting_gametest-form.md.7b974ba6.js",revision:null},{url:"assets/scripting_gametest-form.md.7b974ba6.lean.js",revision:null},{url:"assets/scripting_gametest-qna.md.9d886854.js",revision:null},{url:"assets/scripting_gametest-qna.md.9d886854.lean.js",revision:null},{url:"assets/scripting_index.md.f830e0a7.js",revision:null},{url:"assets/scripting_index.md.f830e0a7.lean.js",revision:null},{url:"assets/scripting_placement-prevention.md.b4c2caf0.js",revision:null},{url:"assets/scripting_placement-prevention.md.b4c2caf0.lean.js",revision:null},{url:"assets/scripting_resources.md.8a2bd3d2.js",revision:null},{url:"assets/scripting_resources.md.8a2bd3d2.lean.js",revision:null},{url:"assets/scripting_saving-loading.md.d929771d.js",revision:null},{url:"assets/scripting_saving-loading.md.d929771d.lean.js",revision:null},{url:"assets/scripting_script-modules.md.ecdd4264.js",revision:null},{url:"assets/scripting_script-modules.md.ecdd4264.lean.js",revision:null},{url:"assets/scripting_script-net.md.aca86b6d.js",revision:null},{url:"assets/scripting_script-net.md.aca86b6d.lean.js",revision:null},{url:"assets/scripting_script-server.md.68f51300.js",revision:null},{url:"assets/scripting_script-server.md.68f51300.lean.js",revision:null},{url:"assets/scripting_script-watchdog.md.6bc1663b.js",revision:null},{url:"assets/scripting_script-watchdog.md.6bc1663b.lean.js",revision:null},{url:"assets/scripting_scripting-editor-qna.md.d8592a03.js",revision:null},{url:"assets/scripting_scripting-editor-qna.md.d8592a03.lean.js",revision:null},{url:"assets/scripting_scripting-intro.md.8a1a3ece.js",revision:null},{url:"assets/scripting_scripting-intro.md.8a1a3ece.lean.js",revision:null},{url:"assets/scripting_starting-scripts.md.6b69768f.js",revision:null},{url:"assets/scripting_starting-scripts.md.6b69768f.lean.js",revision:null},{url:"assets/scripting_troubleshooting.md.b93d1757.js",revision:null},{url:"assets/scripting_troubleshooting.md.b93d1757.lean.js",revision:null},{url:"assets/scripting_typescript.md.d4b32ff7.js",revision:null},{url:"assets/scripting_typescript.md.d4b32ff7.lean.js",revision:null},{url:"assets/scripting_what-is-script.md.96f46f6c.js",revision:null},{url:"assets/scripting_what-is-script.md.96f46f6c.lean.js",revision:null},{url:"assets/servers_index.md.d70235fd.js",revision:null},{url:"assets/servers_index.md.d70235fd.lean.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.536f68b5.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.536f68b5.lean.js",revision:null},{url:"assets/servers_server-software.md.fdd3c6e8.js",revision:null},{url:"assets/servers_server-software.md.fdd3c6e8.lean.js",revision:null},{url:"assets/style.04663297.css",revision:null},{url:"assets/test.md.ee458cf0.js",revision:null},{url:"assets/test.md.ee458cf0.lean.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.5e97f70c.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.5e97f70c.lean.js",revision:null},{url:"assets/visuals_animation-effects.md.a8640bfb.js",revision:null},{url:"assets/visuals_animation-effects.md.a8640bfb.lean.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.f52c46a9.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.f52c46a9.lean.js",revision:null},{url:"assets/visuals_custom-hurt-animations.md.c51ddc5e.js",revision:null},{url:"assets/visuals_custom-hurt-animations.md.c51ddc5e.lean.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.20ebfce6.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.20ebfce6.lean.js",revision:null},{url:"assets/visuals_death-animations.md.ed4e1016.js",revision:null},{url:"assets/visuals_death-animations.md.ed4e1016.lean.js",revision:null},{url:"assets/visuals_deferred-qna.md.aa180875.js",revision:null},{url:"assets/visuals_deferred-qna.md.aa180875.lean.js",revision:null},{url:"assets/visuals_glowing-texture.md.72121337.js",revision:null},{url:"assets/visuals_glowing-texture.md.72121337.lean.js",revision:null},{url:"assets/visuals_index.md.34eb1ad4.js",revision:null},{url:"assets/visuals_index.md.34eb1ad4.lean.js",revision:null},{url:"assets/visuals_introduction.md.eb85e233.js",revision:null},{url:"assets/visuals_introduction.md.eb85e233.lean.js",revision:null},{url:"assets/visuals_leash-position.md.06908ff6.js",revision:null},{url:"assets/visuals_leash-position.md.06908ff6.lean.js",revision:null},{url:"assets/visuals_material-creations.md.cc55665a.js",revision:null},{url:"assets/visuals_material-creations.md.cc55665a.lean.js",revision:null},{url:"assets/visuals_materials.md.9cdf7cce.js",revision:null},{url:"assets/visuals_materials.md.9cdf7cce.lean.js",revision:null},{url:"assets/visuals_math-based-animations.md.e8a4c643.js",revision:null},{url:"assets/visuals_math-based-animations.md.e8a4c643.lean.js",revision:null},{url:"assets/visuals_player-geometry.md.0f25fad4.js",revision:null},{url:"assets/visuals_player-geometry.md.0f25fad4.lean.js",revision:null},{url:"assets/visuals_remove-shadows.md.9b57d546.js",revision:null},{url:"assets/visuals_remove-shadows.md.9b57d546.lean.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.34824d0e.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.34824d0e.lean.js",revision:null},{url:"assets/visuals_structure-presentation.md.5aa222da.js",revision:null},{url:"assets/visuals_structure-presentation.md.5aa222da.lean.js",revision:null},{url:"assets/vr_editing-your-first-model.md.2250f38a.js",revision:null},{url:"assets/vr_editing-your-first-model.md.2250f38a.lean.js",revision:null},{url:"assets/vr_index.md.f9714a20.js",revision:null},{url:"assets/vr_index.md.f9714a20.lean.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.50e3d7bf.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.50e3d7bf.lean.js",revision:null},{url:"assets/vr_pack_setup.md.802f6deb.js",revision:null},{url:"assets/vr_pack_setup.md.802f6deb.lean.js",revision:null},{url:"assets/world-generation_biome-tags.md.586cccd1.js",revision:null},{url:"assets/world-generation_biome-tags.md.586cccd1.lean.js",revision:null},{url:"assets/world-generation_biomes.md.5ea9934e.js",revision:null},{url:"assets/world-generation_biomes.md.5ea9934e.lean.js",revision:null},{url:"assets/world-generation_custom-ores.md.fcfb4f49.js",revision:null},{url:"assets/world-generation_custom-ores.md.fcfb4f49.lean.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.bbc657c8.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.bbc657c8.lean.js",revision:null},{url:"assets/world-generation_feature-types.md.644beca0.js",revision:null},{url:"assets/world-generation_feature-types.md.644beca0.lean.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.4343be94.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.4343be94.lean.js",revision:null},{url:"assets/world-generation_index.md.292d63f8.js",revision:null},{url:"assets/world-generation_index.md.292d63f8.lean.js",revision:null},{url:"assets/world-generation_structure-features.md.8f9da754.js",revision:null},{url:"assets/world-generation_structure-features.md.8f9da754.lean.js",revision:null},{url:"assets/world-generation_surface-builder.md.0261acb4.js",revision:null},{url:"assets/world-generation_surface-builder.md.0261acb4.lean.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.730792bd.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.730792bd.lean.js",revision:null},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"assets/images/favicons/android-chrome-192x192.png",revision:"1fb5ac37a9c926d44d9377dffdb866ec"},{url:"assets/images/favicons/android-chrome-256x256.png",revision:"7403912a35eebe25b54355dfd27106af"},{url:"manifest.webmanifest",revision:"c5a08b36b4610e940947bce83726f2a1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
