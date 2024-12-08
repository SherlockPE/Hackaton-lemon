// Purpose: Mock entrypoint for the Wasm module.
// Do not modify this file.

#[link(wasm_import_module = "vm_hooks")]
extern "C" {
    fn pay_for_memory_grow(_: u16);
}

#[no_mangle]
pub extern "C" fn mark_unused() {
    unsafe { pay_for_memory_grow(0) };
}

#[no_mangle]
pub extern "C" fn user_entrypoint(_: usize) -> i32 {
    0
}
