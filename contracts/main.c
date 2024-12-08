#include "../include/stylus_sdk.h"
#include "../stylus-sdk-c/include/stylus_utils.h"
#include "../stylus-sdk-c/include/storage.h"
#include "../stylus-sdk-c/include/string.h"

#define STORAGE_SLOT__value 0x0

/**
 * General utils/helpers
 */

// buffer used to write output, avoiding malloc
uint8_t buf_out[32];

// succeed and return a bebi32
ArbResult inline _return_success_bebi32(bebi32 const retval)
{
  ArbResult res = {Success, retval, 32};
  return res;
}

ArbResult share_info(uint8_t *input, size_t len)
{
  uint8_t *slot_address = (uint8_t *)(STORAGE_SLOT__value + 0); // Get the slot address

  // Allocate a temporary buffer to store the input
  storage_cache_bytes32(slot_address, input);

  // Flush the cache to store the value permanently
  storage_flush_cache(false);
  return _return_success_bebi32(input);
}

ArbResult read_info(uint8_t *input, size_t len)
{

  uint8_t *slot_address = (uint8_t *)(STORAGE_SLOT__value + 0); // Get the slot address

  storage_load_bytes32(slot_address, buf_out);
  if (bebi32_is_zero(buf_out))
  {
    return _return_short_string(Failure, "NotSet");
  }

  return _return_success_bebi32(buf_out);
}

int handler(size_t argc)
{
  // Save the function calldata
  uint8_t argv[argc];
  read_args(argv); // 4 bytes for selector + function arguments

  // Define the registry array with registered functions
  FunctionRegistry registry[] = {
    {to_function_selector("push_record(string)"), share_info},
    {to_function_selector("pull_record()"), read_info}
      // {to_function_selector("saludame()"), saluda_al_mundo},
      // Add more functions as needed here
  };
  uint32_t signature = *((uint32_t *)argv); // Parse function selector

  // Call the function based on the signature
  ArbResult res = call_function(registry,
                                sizeof(registry) / sizeof(registry[0]),
                                signature, argv + 4, argc - 4 // Exclude the selector from calldata
  );
  return (write_result(res.output, res.output_len), res.status);
}

ENTRYPOINT(handler)