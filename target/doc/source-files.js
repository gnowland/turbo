var sourcesIndex = JSON.parse('{\
"auto_hash_map":["",[],["lib.rs","map.rs","set.rs"]],\
"next_binding":["",[],["lib.rs"]],\
"next_core":["",[["app_render",[],["mod.rs","next_layout_entry_transition.rs"]],["next_client",[],["context.rs","mod.rs","runtime_entry.rs"]],["next_client_component",[],["client_chunks_transition.rs","in_chunking_context_asset.rs","mod.rs","server_to_client_transition.rs","ssr_client_module_transition.rs","with_chunks.rs","with_client_chunks.rs"]],["next_font_google",[],["mod.rs","options.rs","request.rs","util.rs"]],["next_image",[],["mod.rs"]],["next_server",[],["mod.rs"]]],["app_source.rs","embed_js.rs","env.rs","fallback.rs","lib.rs","manifest.rs","next_import_map.rs","page_loader.rs","react_refresh.rs","runtime.rs","server_rendered_source.rs","util.rs","web_entry_source.rs"]],\
"next_dev":["",[],["devserver_options.rs","lib.rs","turbo_tasks_viz.rs"]],\
"node_file_trace":["",[],["lib.rs","nft_json.rs"]],\
"swc_ast_explorer":["",[],["main.rs"]],\
"turbo_malloc":["",[],["counter.rs","lib.rs"]],\
"turbo_tasks":["",[["debug",[],["internal.rs","mod.rs"]]],["backend.rs","collectibles.rs","completion.rs","display.rs","event.rs","id.rs","id_factory.rs","join_iter_ext.rs","lib.rs","magic_any.rs","manager.rs","native_function.rs","no_move_vec.rs","nothing.rs","once_map.rs","persisted_graph.rs","primitives.rs","raw_vc.rs","read_ref.rs","registry.rs","small_duration.rs","state.rs","task_input.rs","timed_future.rs","trace.rs","util.rs","value.rs","value_type.rs"]],\
"turbo_tasks_build":["",[],["lib.rs"]],\
"turbo_tasks_env":["",[],["command_line.rs","custom.rs","dotenv.rs","filter.rs","lib.rs"]],\
"turbo_tasks_fs":["",[["embed",[],["dir.rs","file.rs","fs.rs","mod.rs"]]],["attach.rs","glob.rs","invalidator_map.rs","lib.rs","read_glob.rs","retry.rs","rope.rs","util.rs"]],\
"turbo_tasks_hash":["",[],["base16.rs","deterministic_hash.rs","hex.rs","lib.rs","md4.rs","xxh3_hash64.rs"]],\
"turbo_tasks_macros":["",[["derive",[],["deterministic_hash_macro.rs","mod.rs","trace_raw_vcs_macro.rs","value_debug_format_macro.rs","value_debug_macro.rs"]]],["func.rs","function_macro.rs","lib.rs","util.rs","value_impl_macro.rs","value_macro.rs","value_trait_macro.rs"]],\
"turbo_tasks_macros_shared":["",[],["expand.rs","ident.rs","lib.rs","value_trait_arguments.rs"]],\
"turbo_tasks_memory":["",[["task",[],["meta_state.rs","stats.rs"]],["viz",[],["graph.rs","mod.rs","table.rs"]]],["cell.rs","count_hash_set.rs","lib.rs","map_guard.rs","memory_backend.rs","memory_backend_with_pg.rs","output.rs","scope.rs","stats.rs","task.rs"]],\
"turbo_tasks_testing":["",[],["lib.rs","macros.rs","retry.rs"]],\
"turbopack":["",[["graph",[],["mod.rs"]],["module_options",[],["mod.rs","module_options_context.rs","module_rule.rs"]],["rebase",[],["mod.rs"]],["transition",[],["mod.rs"]]],["lib.rs","resolve.rs","resolve_options_context.rs"]],\
"turbopack_cli_utils":["",[],["issue.rs","lib.rs"]],\
"turbopack_core":["",[["chunk",[],["dev.rs","mod.rs","optimize.rs"]],["introspect",[],["asset.rs","mod.rs"]],["issue",[],["analyze.rs","code_gen.rs","mod.rs","package_json.rs","resolve.rs","unsupported_module.rs"]],["reference",[],["mod.rs","source_map.rs"]],["resolve",[],["alias_map.rs","exports.rs","mod.rs","options.rs","origin.rs","parse.rs","pattern.rs"]]],["asset.rs","code_builder.rs","context.rs","environment.rs","lib.rs","reference_type.rs","source_asset.rs","source_map.rs","source_pos.rs","target.rs","utils.rs","version.rs","virtual_asset.rs"]],\
"turbopack_create_test_app":["",[],["lib.rs","test_app_builder.rs"]],\
"turbopack_css":["",[["chunk",[],["mod.rs","optimize.rs","source_map.rs","writer.rs"]],["references",[],["import.rs","mod.rs","url.rs"]],["transform",[],["mod.rs"]]],["asset.rs","code_gen.rs","embed.rs","lib.rs","module_asset.rs","parse.rs","path_visitor.rs","util.rs"]],\
"turbopack_dev_server":["",[["introspect",[],["mod.rs"]],["source",[],["asset_graph.rs","combined.rs","conditional.rs","lazy_instatiated.rs","mod.rs","query.rs","router.rs","source_maps.rs","specificity.rs","static_assets.rs"]],["update",[],["mod.rs","protocol.rs","server.rs","stream.rs"]]],["fs.rs","html.rs","lib.rs"]],\
"turbopack_ecmascript":["",[["analyzer",[],["builtin.rs","graph.rs","imports.rs","linker.rs","mod.rs","well_known.rs"]],["chunk",[],["loader.rs","mod.rs","optimize.rs","source_map.rs"]],["references",[["esm",[],["base.rs","binding.rs","dynamic.rs","export.rs","meta.rs","mod.rs","module_id.rs","module_item.rs","url.rs"]]],["amd.rs","cjs.rs","mod.rs","node.rs","pattern_mapping.rs","raw.rs","typescript.rs","util.rs"]],["resolve",[],["mod.rs","node_native_binding.rs"]],["transform",[],["mod.rs","next_ssg.rs","server_to_client_proxy.rs"]],["typescript",[],["mod.rs","resolve.rs"]],["webpack",[],["mod.rs","parse.rs","references.rs"]]],["chunk_group_files_asset.rs","code_gen.rs","errors.rs","lib.rs","magic_identifier.rs","parse.rs","path_visitor.rs","special_cases.rs","utils.rs"]],\
"turbopack_env":["",[],["asset.rs","embeddable.rs","issue.rs","lib.rs","try_env.rs"]],\
"turbopack_json":["",[],["issue.rs","lib.rs"]],\
"turbopack_static":["",[],["lib.rs"]],\
"turbopack_swc_utils":["",[],["emitter.rs","lib.rs"]],\
"xtask":["",[["summarize_bench",[],["data.rs","mod.rs"]]],["command.rs","main.rs","nft_bench.rs","publish.rs","visualize_bundler_bench.rs"]]\
}');
createSourceSidebar();
